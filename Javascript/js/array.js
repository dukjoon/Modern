//Array//

const users = ["june", "mike", "sumin"];

users.push("soo");


users[users.indexOf("mike")] = "michel"
console.log(users);
console.log(users.length);

console.log(users.indexOf("sumin"));

console.log(Array.isArray(users));

users.splice(0, 1);

console.log(users);

//...spread operator //

console.log(...users);

