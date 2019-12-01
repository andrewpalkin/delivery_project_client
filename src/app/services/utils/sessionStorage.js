export const setSessionItem = (key, item) => {
    window.sessionStorage.setItem(key, JSON.stringify(item));
};

export const getSessionItem = (key) => {
    return window.sessionStorage.getItem(key);
};

export const removeSessionItem = (key) => {
    window.sessionStorage.removeItem(key);
};

export default {
    setItem: setSessionItem,
    getItem: getSessionItem,
    removeItem: removeSessionItem
}
