/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var chunks = getChunks(num);
    
    var mil = determineMil(chunks[0]);
    var cent = determineCent(chunks[1]);
    var ten = determineTen(chunks[2]);
    var un = determineUn(chunks[3]);

    return mil+cent+ten+un;
};

function getChunks(num){
    var arr = [];
    
    arr.push(Math.floor(num/1000));
    num = num % 1000;
    arr.push(Math.floor(num/100));
    num = num % 100;
    arr.push(Math.floor(num/10));
    num = num % 10;
    arr.push(num);

    return arr;
}

function determineUn(num){
    if(num < 4){
        return charMult("I", num);
    }
    else if(num == 4){
        return "IV";
    }
    else if(num == 9){
        return "IX";
    }
    else if(num > 4 && num < 10){
        return "V" + charMult("I", num-5);
    }
    else{
        throw new Error();
    }
}

function determineTen(num){
    if(num < 4){
        return charMult("X", num);
    }
    else if(num == 4){
        return "XL";
    }
    else if(num == 9){
        return "XC";
    }
    else if(num > 4 && num < 10){
        return "L" + charMult("X", num-5);
    }
    else{
        throw new Error();
    }
}

function determineCent(num){
    if(num < 4){
        return charMult("C", num);
    }
    else if(num == 4){
        return "CD";
    }
    else if(num == 9){
        return "CM";
    }
    else if(num > 4 && num < 10){
        return "D" + charMult("C", num-5);
    }
    else{
        throw new Error();
    }
}

function determineMil(num){
    return charMult('M', num);
}

function charMult(c, times){
    var toReturn = "";
    for(var i = 0; i<times; i++){
        toReturn += c;
    }
    return toReturn;
}


console.log(intToRoman(3453));
