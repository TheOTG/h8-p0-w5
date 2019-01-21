function kaliTerusRekursif(angka) {
    var temp = '' + angka;

    if(temp.length > 1) {
        temp = temp[0] * kaliTerusRekursif(temp.slice(1, temp.length));
    }

    temp += '';

    if(temp.length > 1) {
        return kaliTerusRekursif(temp);
    }

    if(temp.length === 1) {
        return temp;
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6