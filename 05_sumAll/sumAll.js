const sumAll = function(initial, final) {
                

    if (initial < 0 || final < 0){
        return "ERROR";
    }

    if (!Number.isInteger(initial) || !Number.isInteger(final)){
        return "ERROR";
    }

    if (initial > final){
        l = final;
        final = initial;
        initial = l;
        n = initial;
        steps = initial;
        add = 2;

        while (steps != final) {
            n += add;
            ++add;
            ++steps;
        }
    }else {
        n = initial;
        steps = initial;
        add = 2;

        while (steps != final) {
        n += add;
        ++add;
        ++steps;
    }

    
    }

    return n;
    
    
};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
