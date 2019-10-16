const authlogin = async (payload) => {
    const {mail, password} = payload;
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({mail,password})
    };
    const response = await fetch('/api/register', options);
    handleResponse(response);
    const user = undefined;
    if (user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
}


const handleResponse= (response) => {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}

async function authLogout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}        
    };
    const response = await fetch('/api/auth/logout', options);
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
    const response = await fetch('/api/auth/register', options);
    handleResponse(response);
    const info = undefined;   
    return info;
}

const loginService = {
    login: authlogin,
    logout: authLogout,
    register: authRegister
}

export default loginService;
