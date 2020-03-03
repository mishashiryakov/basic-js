class VigenereCipheringMachine {

    constructor(reverse) {
        this.reverse = reverse;
    }

    encrypt(message, key) {
        if(message === undefined || key === undefined) {throw new Error()};
        
        let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        message = message.toUpperCase();
        key = key.toUpperCase();
        let keyArr = [];
        let j = 0;

    
        for(let i = 0; i < message.length; i++) {                   // Привожу ключ к виду сообщения. 
            if(/\s/.test(message[i])) {keyArr.push(' '); continue};
            keyArr.push(key[j]);
            j++;
            if(j == key.length) {j = 0};
        }

        keyArr = keyArr.join('');

        let final = [];
        let calc;
        

        for(let i = 0; i  < message.length; i++) {
            if(!/[A-Z]/.test(message[i])) {final.push(message[i]); continue};
                
            calc = a.charCodeAt(a.indexOf(message[i])) - 130 + a.charCodeAt(a.indexOf(keyArr[i]));
            if (calc >= 26) {calc -= 26};
            final.push(a[calc]);
        }

        if(this.reverse === false) {
            final.reverse();
        }
                
        return final.join('');
    }

    decrypt(encryptedMessage, key) {
        if(encryptedMessage === undefined || key === undefined) {throw new Error()};

        let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        let keyArr = [];
        let j = 0;
        
        for(let i = 0; i < encryptedMessage.length; i++) {          // Привожу ключ к виду сообщения. 
            if(/\s/.test(encryptedMessage[i])) {
                keyArr.push(' ');
                continue
            };
            keyArr.push(key[j]);
            j++;
            if(j == key.length) {j = 0};
        }

        keyArr = keyArr.join('');
        
        let final = [];
        let calc;
        

        for(let i = 0; i  < encryptedMessage.length; i++) {
            if(!/[A-Z]/.test(encryptedMessage[i])) {
                final.push(encryptedMessage[i]);
                continue
            };
                
            calc = a.charCodeAt(a.indexOf(encryptedMessage[i])) - a.charCodeAt(a.indexOf(keyArr[i]));
            if (calc < 0) {calc += 26};
            
            final.push(a[calc]);
        }

        if(this.reverse === false) {
            final.reverse();
        }
   
    return final.join('');

    }
}

module.exports = VigenereCipheringMachine;
