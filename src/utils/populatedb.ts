import { getClient } from './database';

const populateDB = async () => {
    const client = await getClient();
    try {
        
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error populating database:', error);

    } finally {
        client.release();
    }
}