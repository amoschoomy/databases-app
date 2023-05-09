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
      'INSERT INTO USER_CONTENT (uid, content_id) VALUES ($1, $2)',
      [uid, content_id],
    );
    await client.query(
      'INSERT INTO DOCUMENT (document_id, title, year, pdf_url) VALUES ($1, $2, $3, $4)',
      [content_id, document.title, document.year, document.pdf_url],
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

export const summariseDocument = async (document_id: string) => {
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
    'INSERT INTO USER_CONTENT (uid, content_id) VALUES ($1, $2)',
    [uid, video_id],
  );
  await client.query(
    'INSERT INTO VIDEO (video_id, title, description) VALUES ($1, $2, $3)',
    [video_id, video_file.name, video_description ?? null],
  );

  const summary = (
    await axios.post('http://localhost:5000/audio-summarise', video_file)
  ).data;

  await client.query(
    'INSERT INTO SUMMARY (summary_id, summary) VALUES ($1, $2)',
    [video_id, summary],
  );
  return summary;
};

export const deleteDocument = async (document_id: string) => {
  await client.query('DELETE FROM CONTENT WHERE content_id = $1', [
    document_id,
  ]);
};

export const deleteVideo = async (video_id: string) => {
  await client.query('DELETE FROM CONTENT WHERE content_id = $1', [video_id]);
};

export const regenerateSummary = async (content_id: string) => {
  // update operation
  const pdf_url = (
    await client.query('SELECT pdf_url FROM DOCUMENT WHERE document_id = $1', [
      content_id,
    ])
  ).rows[0];
  const summary = (await axios.post('http://localhost:5000/summarise', pdf_url))
    .data;
  await client.query('UPDATE SUMMARY SET summary = $1 WHERE summary_id = $2', [
    summary,
    content_id,
  ]);
};

export const countTotalSummary = async (uid: string) => {

  const result = await client.query(
    `SELECT COUNT(*) FROM USER_CONTENT WHERE uid = $1 AND content_id IN (SELECT summary_id FROM SUMMARY)`,
    [uid],
  );
  return result.rows[0].count;
};

export const countTotalDocument = async (uid: string) => {
  const result = await client.query(
    `
    SELECT COUNT(*)
    FROM DOCUMENT_SEARCH
    WHERE uid = $1
  `,
    [uid],
  );
  return result.rows[0].count;
};

export const countTotalVideo = async (uid: string) => {
  const result = await client.query(
    `
    SELECT COUNT(*)
    FROM USER_CONTENT
    INNER JOIN CONTENT ON USER_CONTENT.content_id = CONTENT.content_id
    WHERE USER_CONTENT.uid = $1 AND CONTENT.content_type = 'video'
  `,
    [uid],
  );
  return result.rows[0].count;
};

export const groupDocumentsByYear = async (uid: string) => {
  const result = await client.query(
    `
  SELECT d.year, COUNT(*) AS number_of_documents
  FROM document d
  JOIN document_search ds ON d.document_id = ds.document_id
  WHERE ds.uid = $1
  GROUP BY d.year
`,
    [uid],
  );

  return result.rows;
};
