import CookieUtils from "@/utils/cookieUtils";

export default class TokenUtils {

    //parse token in JSON
    public static parseJwt(token: String) {
        if (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        }
        else {
            return null;
        }


    }

    //get a value which is in the payload of a given token
    public static getValueFromToken(token: String, name: string) {
        let decoded = this.parseJwt(token);
        if (decoded) {

            return decoded[name];
        }
        else {
            return null;
        }

    }

    //get a value which is in the payload of a token which is stored in cookies
    public static getValueFromTokenFromCookie(name: string) {
        let token = CookieUtils.getCookie("token");
        if (token) {
            let decoded = this.parseJwt(token);
            return decoded[name];
        }
        else {
            return console.log("no token");
        }

    }

    //check user type, better to use it in beforeMouted otherwise cant access cookies
    //and as router param, put this.$router in a component
    public static checkUserType(type: string, router: any) {
        if (TokenUtils.getValueFromTokenFromCookie("type") !== type) {
            router.push({ name: 'home' })
        }
        else {
            //on charge la page    
        }
    }
}