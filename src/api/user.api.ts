import { client } from '../app';

export const addUserDetails = async (user: any): Promise<void> => {
  try {
    const oauth_id = user.sub;
    const result = await client.query(
      'SELECT * FROM USERS WHERE oauth_id = $1',
      [oauth_id],
    );
    if (result.rows.length > 0) {
      return;
    } else {
      await client.query(
        'INSERT INTO USERS (first_name, last_name, email,oauth_id) VALUES ($1, $2, $3,$4)',
        [user.given_name, user.family_name, user.email, user.sub],
      );
    }
  } catch (error) {
    console.log(error);
  }
};
export const getAllSummaries = async (oauth_id: string): Promise<any> => {
  try {
    const result = await client.query(
      'SELECT * FROM USERS WHERE oauth_id = $1',
      [oauth_id],
    );
    if (result.rows.length < 1) {
      return;
    } else {
      const summaries = await client.query(
        `SELECT 
      CONTENT.content_id, 
      COALESCE(DOCUMENT.title, VIDEO.title) AS title, 
      SUMMARY.summary FROM CONTENT LEFT JOIN DOCUMENT 
      ON CONTENT.content_id = DOCUMENT.document_id
      LEFT JOIN VIDEO 
      ON CONTENT.content_id = VIDEO.video_id
      INNER JOIN SUMMARY 
      ON CONTENT.content_id = SUMMARY.summary_id
      INNER JOIN USER_CONTENT 
      ON CONTENT.content_id = USER_CONTENT.content_id
      WHERE USER_CONTENT.uid = $1;`,
        [result.rows[0].uid],
      );
      return summaries.rows;
    };
  } catch (error) {
    console.log(error);
  }
};
