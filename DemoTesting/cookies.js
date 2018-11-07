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
        document.cookie = "";
        this.load();
        this.set("testCookie", "testValue");
        this.set("cookie", 23);
        this.set("lkj", 999);
        this.set("expires", 999);
        this.update();
        this.list();
    }

    set(cookie, value) {
        // Set the value of a cookie. If the cookie already exists update it, else create new cookie
        console.log("Set this cookie: " + cookie + "Value: " + value);
        this.cookies[cookie] = value;
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
        console.table(this.cookies);
        console.log(document.cookie);
    }

    update() {
        // Saves all cookies to page by formating object and properties to string and storing document.cookies;
        console.log("Update page cookies");
        var cookieString = "";
        for (var key in this.cookies) {
            if (this.cookies.hasOwnProperty(key)) {
                // Do something with this.cookies[key]
                //console.log("cookie name: " + key);
                //console.log("cookie value: " + this.cookies[key]);
                cookieString += key + "=" + this.cookies[key] + "; ";
            }
        }
        console.log(cookieString);
        document.cookie = cookieString;
    }

    load() {
        // Get all cookies from page
        console.log("Load cookies");
        var cookieString = document.cookie;
        this.cookies;
    }
}