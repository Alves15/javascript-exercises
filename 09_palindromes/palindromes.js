const palindromes = function (word) {       
    const palindromes = function (word) {       
        let test = word;
        let palin = "";
        let result = test.split("");
        let reversed = result.reverse();
        console.log(reversed);
        for (i = 0; i < reversed.length; i++) {
            palin += reversed[i];
        }
        if (word == palin){
            return true;
        }else{
            return false;
        }
        
    };
};

// Do not edit below this line
module.exports = palindromes;
