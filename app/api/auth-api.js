import axios from 'axios';

class AuthApi {
    signIn({email, password}) {
        return new Promise((resolve, reject) => {
            axios({
                url: 'https://api.escuelajs.co/api/v1/auth/login',
                method: 'POST',
                data: {
                    email,
                    password
                }
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err => reject(err)));
        });
    }

    me(accessToken) {
        return new Promise((resolve, reject) => {
            // https://api.escuelajs.co/api/v1/auth/profile
            // Doc: https://fakeapi.platzi.com/en/rest/auth-jwt
        });
    }
}

export const authApi = new AuthApi();
