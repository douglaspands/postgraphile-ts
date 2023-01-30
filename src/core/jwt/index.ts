import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

export const verify = (token: string, secret: string): Promise<JwtPayload> => {
    return new Promise((resolve, reject) => {
        try {
            const res = jwt.verify(token, secret);
            let payload: JwtPayload;
            if (typeof res === 'string') {
                payload = JSON.parse(res);
            } else {
                payload = res;
            }
            resolve(payload);
        } catch (error) {
            reject(error);
        }
    });
};

export const sign = (payload: JwtPayload, secret: string, options: SignOptions): string => {
    return jwt.sign(payload, secret, options);
};

export default { verify, sign };
