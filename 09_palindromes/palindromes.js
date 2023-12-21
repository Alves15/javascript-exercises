const palindromes = function (word) {             
        let test = word;
        test = test.toLowerCase();
        let palin = "";
        let result = test.split("");
        let reversed = result.reverse();
        console.log(reversed);
        for (i = 0; i < reversed.length; i++) {
            palin += reversed[i];
        }
        palin = palin.replaceAll(/!/g,'');
        test = test.replaceAll(/!/g,'');
        if (test == palin){
            return true;
        }else{
            return false;
        }
 
};

// Do not edit below this line
module.exports = palindromes;
