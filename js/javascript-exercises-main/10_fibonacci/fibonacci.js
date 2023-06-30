const fibonacci = function(position) {
    if(position <= 0) return "Number cant be 0 or negative";
    if(position ===  1 || position === 2) return 1;

    return fibonacci(position - 1) + fibonacci(position - 2);
};

// Do not edit below this line
module.exports = fibonacci;
