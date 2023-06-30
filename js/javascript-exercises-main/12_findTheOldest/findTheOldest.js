const findTheOldest = function(people) {
    return people.reduce( oldest, person => {
        
        let oldestAge = oldest.birthYear - oldest.deathYear;
        let personAge = person.birthYear - person.deathYear;

        personAge > oldestAge ? person : oldest; 
    });
};

// Do not edit below this line
module.exports = findTheOldest;
