export default class Validator {
    constructor(name) {
        this.nickname = name
    }

    validateUsername(){
        const letters = new RegExp('[A-Za-z]');
        const numbers = new RegExp('[0-9-_]');
        const startRules = new RegExp('^[^\\d-_]');
        const endRules = new RegExp('[^\\d-_]$');
        const numberRules = new RegExp('\\d{3}');
        const isForbiddenSymbol = new RegExp('[!?@#$%^&*()~`]');

        if(!letters.test(this.nickname)){
            return false;
        } else if (!numbers.test(this.nickname)){
            if(letters.test(this.nickname)){
                return true
            }
            return false
        } else if (!startRules.test(this.nickname)){
            return false;
        } else if (!endRules.test(this.nickname)){
            return false;
        } else if (numberRules.test(this.nickname)){
            return false
        } else if (isForbiddenSymbol.test(this.nickname)){
            return false
        } else {
            return true
        }
    }
}