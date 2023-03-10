import jwt from '@core/jwt';
import config from '@config';

export default class Token {
    constructor(
        public role: string,
        public exp: number,
        public personId: number,
        public username: string,
    ) {}
    static fromRow(row: { role: string; exp: string; personId: number; username: string }): Token {
        return new Token(row.role, Number(row.exp), row.personId, row.username);
    }
    get accessToken(): string {
        return jwt.sign(
            {
                role: this.role,
                exp: this.exp,
                person_id: this.personId,
                username: this.username,
            },
            config.JWT_SECRET,
            config.JWT_OPTIONS,
        );
    }
    get tokenType(): string {
        return 'bearer';
    }
}
