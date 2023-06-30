const palindromes = function (string) {
    let filtered = "";
    string.toLowerCase().split().forEach(letter => {
        if(letter != ' ' && letter != ',' && letter != '.' && letter != `'`){
            filtered += letter;
        }
    });
    return filtered == filtered.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
