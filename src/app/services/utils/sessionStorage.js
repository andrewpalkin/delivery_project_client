const setSessionItem = (key, item) => {
    window.sessionStorage.setItem(key, JSON.stringify(item));
};

const getSessionItem = (key) => {
    return window.sessionStorage.getItem(key);
};

const removeSessionItem = (key) => {
    window.sessionStorage.removeItem(key);
};

const isUserLoged= () => {
    const user = getSessionItem('user');
    let isLoged = false;
    if (user) {
        isLoged = true;
    }
    return isLoged;
}

export default {
    setItem: setSessionItem,
    getItem: getSessionItem,
    removeItem: removeSessionItem,
    isUserLoged: isUserLoged
}
