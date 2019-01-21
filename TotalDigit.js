function totalDigitRekursif(angka) {
    var temp = '' + angka;

    if(temp.length === 1) {
        return angka;
    }

    return Number(temp[0]) + totalDigitRekursif(Number(temp.slice(1, temp.length)));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5