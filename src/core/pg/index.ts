import { Pool } from 'pg';
import config from '@config';

export type Connection = Pool;

export function createConnection(schema = ''): Connection {
    const connectionString = config.PG_URL + (schema ? `?search_path=${schema}` : '');
    // const connectionString = config.PG_URL + (schema ? `?currentSchema=${schema}` : '');
    const pool = new Pool({ connectionString });
    return pool;
}

export default { createConnection };
