console.warn('hello');
console.error('this is error message');
console.log('hello');

//console.log(console) 에 console 사용법 //

//Javascript 의 변수 //
// var
// let
// const

// console.log(window);

const name = "dukjoon jung";
const age = 25;
const weight = 60.5;
const girlFriend = undefined;
const isMale = true;
const money = null;
const hobbies = ["game", "programming", "youtube"]
const homework = "korean, english, math, history";
console.log(typeof girlFriend);


console.log(`제 이름은 ${name}이고, 나이는 ${age}살 입니다.`)

console.log(name.substring(0,4).toUpperCase());

console.log(name.split(" ")); //짜르는 기준//

console.log(hobbies.join().split(","));

console.log(homework.split(",")[0]); //배열로 만들기//

