const removeFromArray = function(array, ...valuesToRemove) {

    for (const value of valuesToRemove) {
        if (array.includes(value)){
            let valueIndex = array.indexOf(value);

            array.splice(valueIndex, 1);
        }
        
    }
    
    return array;

};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
