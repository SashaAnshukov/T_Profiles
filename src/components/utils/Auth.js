export const BASE_URL = 'https://reqres.in';

// проверка ответа от сервера
const checkResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/api/register`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(checkResponse)
    .then((data) => {
        // сохраняем токен в localStorage
        localStorage.setItem('jwt', data.token);
        return data;
    })
    .catch(err => console.log(err))
};



//Запрос для проверки валидности токена
export const tokenCheck  = (token) => {
    //console.log(token)
    return fetch(`${BASE_URL}/api/login`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(res => res.json())
    .then(data => data)
}

