/*
 * Gets a document cookie by the cookie name
 * entered in the parameter.
 */
export function getCookie(cookieName) {
    const name = cookieName +'=';
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecoded.split(';');

    let res;
    cookieArray.forEach((cookie) => {
       if (cookie.indexOf(name) === 0) {
           res = cookie.substring(name.length);
       }
    });
    return res;
}

/*
 * Sets a document cookie to the name and value entered
 * in the parameters.
 */
export function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

/**
 * Delete a cookie
 * @param cookieName Name of the cookie to delete
 */
export function deleteCookie(cookieName) {
    setCookie(cookieName, "", -1);
}
