import { Pool } from 'pg';
import config from '@config';

function createPool(): Pool {
    const pool = new Pool({ connectionString: config.PG_URL });
    return pool;
}

export default { createPool };
