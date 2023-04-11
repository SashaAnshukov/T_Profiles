export class Api {
    constructor({adress, token}) {
        this._adress = adress;
        this._token = token;
    }

    getInitialCards() {
        return Promise.all([
            this.getInitialCards1().then(res => res.data), this.getInitialCards2().then(res => res.data)
        ])
    }

    getInitialCards1() {
        return fetch(`${this._adress}/api/users?page=1`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            },
        })
        .then(this._checkResponse)
    }

    getInitialCards2() {
        return fetch(`${this._adress}/api/users?page=2`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            },
        })
        .then(this._checkResponse)
    }
    
    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
    }
}

const api = new Api({
    adress: 'https://reqres.in',
    token: 'QpwL5tke4Pnpja7X4'
})

export default api;