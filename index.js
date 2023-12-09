class PasswordMaster {
    #lowercase = "abcdefghijklmnopqrstuvwxyz";
    #uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    #numbers = "0123456789";
    #symbols = "!@%^&*+_#$-=}{[]|:;/?.><,()`~";
    create(options) {
        options = options ?? {};

        if(!options.length) {
            options.length = 10;
        }

        let chars = this.#lowercase;

        if(options.uppercase) {
            chars += this.#uppercase;
        }

        if(options.numbers) {
            chars += this.#numbers;
        }

        if(options.symbols) {
            chars += this.#symbols;
        }

        chars = this.#mixString(chars);

        let password = "";

        for(let i = 0; i < options.length; i++) {
            password += chars[this.#getRandomNumber(chars.length)];
        }

        return password;
    }

    #getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    #mixString(str) {
        let arr = str.split('');

        arr.sort(function() {
            return 0.5 - Math.random();
        });

        return arr.join('');
    }
}

module.exports = new PasswordMaster();