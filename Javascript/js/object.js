// object key value //

const animal = {
    name: "monkey",
    food: ["banana", "peanut"],
    age : 10,
    location: {
        country: "Congo",
        home: "forest",
        isAfrica: true
    }
};

console.log(animal);


//JSON

const animalJSON = JSON.stringify(animal);
console.log(JSON.parse(animalJSON).name);
 //parsing

