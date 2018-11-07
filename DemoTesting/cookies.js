// JavaScript source code
document.cookie = "test=value";
class Cookies {
    /* Cookie handler object
     * 
     */
    constructor() {
        this.cookies = {};
        /* Save the cookies in object

         */
        this.load();
        this.set("testCookie", "testValue");
        this.set("cookie", 23);
        this.set("lkj", 999);
        this.set("expires", 999);
        this.list();
    }

    set(cookie, value) {
        // Set the value of a cookie. If the cookie already exists update it, else create new cookie
        console.log("Set \ncookie: " + cookie + "\nValue: " + value);
        this.cookies[cookie] = value;
        document.cookie = cookie + "=" + value;
    }

    get(cookie) {
        // Return a single cookie
        console.log("Return this cookie: " + cookie);
        return this.cookies[cookie];
    }

    remove(cookie) {
        // Delete a single cookie by setting its expiry date to a past time
        console.log("Remove cookie: " + cookie);
        this.cookies[exp] = Date.now().toUTCString();
    }

    list() {
        // Displays all cookies loaded 
        console.log("List all cookies");
        console.log("Cookies in memory:");
        console.table(this.cookies);
        console.log("Cookies in page:");
        console.log(document.cookie, "\n\n\n");
        
    }

    load() {
        // Get all cookies from page
        console.log("Load cookies");
        this.cookieString = document.cookie;
    }
}