/*
 * Gets a document cookie by the cookie name
 * entered in the parameter.
 */
export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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
