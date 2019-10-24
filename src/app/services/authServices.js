import Request from './utils/baseService';

const authlogin = async (payload) => {
    const {mail, password} = payload;
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({mail, password})
    };
    const response = await fetch('/auth/register', options);
    handleResponse(response);
    const user = undefined;
    if (user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
};

const handleResponse = (response) => {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response;
};

async function authLogout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };
    const response = await fetch('/auth/logout', options);
    handleResponse(response);
    const user = undefined;
    if (user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
}

async function authRegister(payload) {
    return await Request().post('/auth/register', payload);
}

const authServices = {
    login: authlogin,
    logout: authLogout,
    register: authRegister
};

export default authServices;
