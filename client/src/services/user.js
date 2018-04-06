import * as baseService from './base';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

let loggedIn = false;

function isLoggedIn() {
    return loggedIn;
}

function checkLogin() {
    if (loggedIn) {
        return Promise.resolve(true);
    } else {
        baseService.populateAuthToken();
        return me()
        .then((user) => {
            loggedIn = true;
            return Promise.resolve(true);
        }).catch(() => {
            return Promise.resolve(false);
        });
    }
}

function login(email, password) {
    return baseService.makeFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
            .then((jsonResponse) => {
                baseService.setAuthToken(jsonResponse.token);
                loggedIn = true;
            })
            .then(() => {
                return baseService.get(`/api/users/${email}`)
            });

        } else if (response.status === 401) {
            return response.json()
            .then((jsonResponse) => {
                throw jsonResponse;
            });
        }
    });
}

function logout() {
    baseService.clearAuthToken();
    loggedIn = false;
}

function me() {
    return baseService.get('/api/users/me');
}

export { isLoggedIn, checkLogin, login, logout };
