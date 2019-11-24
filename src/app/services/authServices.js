import Request from './utils/baseService';

async function authlogin(payload) {
    return await Request().post('/auth/login', payload);
};

async function authLogout() {
    return await Request().post('/auth/logout');
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
