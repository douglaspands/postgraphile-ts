import { createConnection, Connection } from '@core/pg';
import Token from '@model/token';
import { isEmpty } from 'lodash';
import config from '@config';
import logging from '@core/logging';

const logger = logging.getLogger('repositories.authenticate');

export default class Authenticate {
    #pool: Connection;
    #loginSql = `select u.username,
                        u.person_id as "personId",
                        extract(epoch from now() + interval '7 days') as exp,
                        r.name as role 
                 from app_public.user as u
                 inner join app_public.role as r on r.id = u.role_id
                 where u.username = $1::text 
                   and u.password = app_public.crypt($2::text, u.password)`;
    constructor() {
        this.#pool = createConnection(config.PG_SCHEMA);
    }
    async login(username: string, password: string): Promise<Token> {
        const query = {
            name: 'user-login',
            text: this.#loginSql,
            values: [username, password],
        };
        try {
            const res = await this.#pool.query(query);
            if (res && res.rows && !isEmpty(res.rows)) {
                return Token.fromRow(res.rows[0]);
            }
        } catch (error) {
            logger.error(error);
            throw error;
        }
        throw Error('User not found or invalid!');
    }
}
