const palindromes = function (word) {             
        let test = word;
        let palin = "";
        test = test.toLowerCase();
        test = test.replaceAll(/\!|\?|\,|\./g,'');
        test = test.replaceAll(" ",'');
        let result = test.split("");
        let reversed = result.reverse();
        for (i = 0; i < reversed.length; i++) {
            palin += reversed[i];
        }      
        if (test == palin){
            return true;
        }else{
            return false;
        }
 
};

// Do not edit below this line
module.exports = palindromes;
