import axios from 'axios';
import { client } from '../app';

export const retrieveDocuments = async (uid: string, keyword: string) => {
  const documents = (await axios.post('http://localhost:5000/search', keyword))
    .data;
  const transformedDocuments = [];
  for (const document of documents) {
    const result = await client.query(
      'INSERT INTO CONTENT (content_type) VALUES ($1) RETURNING content_id',
      ['document'],
    );
    const content_id = result.rows[0].content_id;
    await client.query(
      'INSERT INTO DOCUMENT (document_id, title, year) VALUES ($1, $2, $3)',
      [content_id, document.title, document.year],
    );
    await client.query(
      'INSERT INTO DOCUMENT_SEARCH (uid, document_id) VALUES ($1, $2)',
      [uid, content_id],
    );

    for (const author of document.authors) {
      await client.query(
        'INSERT INTO AUTHOR (scholar_id, name) VALUES ($1, $2)',
        [author.scholar_id, author.name],
      );
      await client.query(
        'INSERT INTO DOCUMENT_AUTHOR (document_id, author_id) VALUES ($1, $2)',
        [content_id, author.scholar_id],
      );
    }
    const authorNames = document.authors.map(
      (author: { name: any }) => author.name,
    );
    transformedDocuments.push({
      document_id: content_id,
      title: document.title,
      authors: authorNames,
    });
  }
  return transformedDocuments;
};

export const summariseDocument = async (uid: string, document_id: string) => {
  const pdf_url = (
    await client.query('SELECT pdf_url FROM DOCUMENT WHERE document_id = $1', [
      document_id,
    ])
  ).rows[0];
  const summary = (await axios.post('http://localhost:5000/summarise', pdf_url))
    .data;

  await client.query(
    'INSERT INTO SUMMARY (summary_id, summary) VALUES ($1, $2)',
    [document_id, summary],
  );

  return summary;
};

export const summariseVideo = async (
  uid: string,
  video_file: File,
  video_description: string | undefined,
) => {
  const result = await client.query(
    'INSERT INTO CONTENT (content_type) VALUES ($1) RETURNING content_id',
    ['video'],
  );
  const video_id = result.rows[0].content_id;
  await client.query(
    'INSERT INTO VIDEO (video_id, title, description) VALUES ($1, $2, $3)',
    [video_id, video_file.name, video_description ?? null],
  );

  const summary = (
    await axios.post('http://localhost:5000/audio-summarise', video_file)
  ).data;

  await client.query('INSERT INTO SUMMARY (summary_id, summary) VALUES ($1, $2)', [video_id, summary]);
  return summary;
};
