function changeVocals (str) {
    var vowelSmall = 'aiueo';
    var vowelBig = 'AIUEO';
    var changeVowelSmall = 'bjvfp';
    var changeVowelBig = 'BJVFP';

    if(str.length === 0) {
        return '';
    }
  
    for(var i = 0; i < vowelSmall.length; i++) {
        if(str[0] === vowelSmall[i]) {
            return changeVowelSmall[i] + changeVocals(str.slice(1, str.length));
        }
        if(str[0] === vowelBig[i]) {
            return changeVowelBig[i] + changeVocals(str.slice(1, str.length));
        }
    }

    return str[0] + changeVocals(str.slice(1, str.length));
}

function reverseWord (str) {
    if(str.length === 1) {
        return str;
    }

    return str[str.length - 1] + reverseWord(str.slice(0, str.length - 1))
}

function setLowerUpperCase (str) {
    var smallAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    var bigAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if(str.length === 0) {
        return '';
    }

    for(var i = 0; i < 26; i++) {
        if(str[0] === smallAlphabet[i]) {
            return bigAlphabet[i] + setLowerUpperCase(str.slice(1, str.length));
        }
        if(str[0] === bigAlphabet[i]) {
            return smallAlphabet[i] + setLowerUpperCase(str.slice(1, str.length));
        }
    }
    
    // kalau tidak ada di smallAlphabet atau bigAlphabet
    return str[0] + setLowerUpperCase(str.slice(1, str.length));
}

function removeSpaces (str) {
    if(str.length === 0) {
        return '';
    }

    if(str[0] === ' ') {
        return removeSpaces(str.slice(1, str.length));
    }

    return str[0] + removeSpaces(str.slice(1, str.length));
}

function passwordGenerator (name) {
    if(name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    var changeVoc = changeVocals(name);
    var reversed = reverseWord(changeVoc);
    var changeBigSmall = setLowerUpperCase(reversed);
    var password = removeSpaces(changeBigSmall);;

    return password;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'