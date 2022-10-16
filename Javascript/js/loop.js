const animals = [
    { name: "monkey", size: "big", isAggressive: false, weight: 20},
    { name: "tiger", size: "big", isAggressive: true, weight: 60},
    { name: "lion", size: "big", isAggressive: true, weight: 50},
    { name: "cat", size: "small", isAggressive: false, weight: 8},
    { name: "dog", size: "small", isAggressive: false, weight: 10}
];

console.log(animals);

// old

// for(let i = 0; i < animals.length; i++){
//     console.log(animals[i])
// }


// new
// for(let animal of animals){
//     console.log(animal.name)
// }

// let i = 0;
// while(i<10) {
//     i++
// };
// console.log(animals[i]);


// forEach, map, reduce, filter

// animals.forEach(function(animal, index) {
//     console.log(animals, index)
// });


// map 배열을 재정의할 때 사용함

animals.map(function (animal) {
    return animal
})

const mappedAnimal = animals.map(function (animal) {
    // return { name:animal.name, size:animal.size }
    return `${animal.name} is ${animal.size}`;
})
console.log(mappedAnimal);

// filter
const filteredAnimal = animals.filter(animal => {
    return animal.weight > 200;
})

console.log(filteredAnimal);

// reduce
const reducedAnimal = animals.reduce((acc,cur) => {
    return acc + cur.weight
},0) //초기값 지정은 0으로

console.log(reducedAnimal);

