import AuthenticateRepository from '@repository/authenticate';
import TokenSchema from '@schema/token';

const authenticateRepository = new AuthenticateRepository();

async function login(username: string, password: string): Promise<TokenSchema> {
    const tokenModel = await authenticateRepository.login(username, password);
    return TokenSchema.fromTokenModel(tokenModel);
}

export default { login };
