
const registerService = 'http://localhost:8000';
const authlogin = async (payload) => {
    const {mail, password} = payload;
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({mail,password})
    };
<<<<<<< HEAD:src/app/services/loginService.js
    const response = await fetch(registerService+'/auth/register', options);
=======
    const response = await fetch('/auth/login', options);
>>>>>>> caedcca4464a1094a06450c07ef7dcd8cbef41e4:src/app/services/authServices.js
    handleResponse(response);
    const user = undefined;
    if (user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
};

const handleResponse= (response) => {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
<<<<<<< HEAD:src/app/services/loginService.js

    return response;
}
=======
    return response.json();
};
>>>>>>> caedcca4464a1094a06450c07ef7dcd8cbef41e4:src/app/services/authServices.js

async function authLogout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}        
    };
<<<<<<< HEAD:src/app/services/loginService.js
    const response = await fetch(registerService + '/auth/logout', options);
=======
    const response = await fetch('/auth/logout', options);
>>>>>>> caedcca4464a1094a06450c07ef7dcd8cbef41e4:src/app/services/authServices.js
    handleResponse(response);
    const user = undefined;
    if (user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
}

async function authRegister(signupPayload) {
    // remove user from local storage to log user out    
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(signupPayload)
    };
<<<<<<< HEAD:src/app/services/loginService.js
    const response = await fetch(registerService+'/auth/register', options);
    handleResponse(response);    
    return handleResponse(response);   ;
=======
    const response = await fetch('/auth/register', options);
    handleResponse(response);
    const info = undefined;   
    return info;
>>>>>>> caedcca4464a1094a06450c07ef7dcd8cbef41e4:src/app/services/authServices.js
}

const authServices = {
    login: authlogin,
    logout: authLogout,
    register: authRegister
};

export default authServices;
