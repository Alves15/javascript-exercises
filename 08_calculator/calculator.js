const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {  
  return a - b;
};

const sum = function(a) {
	const total = a.reduce((sum, current) => sum + current, 0);
  return total;
}

const multiply = function(...a) {
  const total = a.reduce((sum, current) => sum * current, 1);
  return total;
};

const power = function(a, b) {
  d = a * a;
            
  for (let c = 2; c < b; c++) {
      d = d * a;
      c++;   
  }

  return d;	          
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
