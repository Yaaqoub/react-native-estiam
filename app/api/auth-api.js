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
            axios({
                url: 'https://api.escuelajs.co/api/v1/auth/profile',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err => reject(err)));
        });
    }
}

export const authApi = new AuthApi();
