import {client} from '../app';

export const addUserDetails = async (user:any): Promise<void> => { 
    await client.query('INSERT INTO USERS (first_name, last_name, email) VALUES ($1, $2, $3)', [user.first_name, user.last_name, user.email]);
 };