import { client } from '../app';

export const addUserDetails = async (user: any): Promise<void> => {
    try {
        const oauth_id = user.sub;
        const result = await client.query('SELECT * FROM USERS WHERE oauth_id = $1', [
          oauth_id,
        ]);
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
