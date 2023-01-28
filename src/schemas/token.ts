import TokenModel from '@model/token';

export default class Token {
    constructor(public access_token: string, public token_type: string) {}
    static fromTokenModel(token: TokenModel): Token {
        return new Token(token.accessToken, token.tokenType);
    }
}
