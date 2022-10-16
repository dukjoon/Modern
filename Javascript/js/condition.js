const x = "102";
let group = "";


// if(x==10) {
//     console.log('x is 10')
// }

// else {
//     console.log('x is not 10')
// };

// if(x===102) {
//     console.log('x is 102')
// };

// == 와 ===의 차이.

if (x>20) {
    group = "senior"
} else {
    group = "junior"
};

console.log(group)

///삼합 연산자
// 조건 ? 참일경우 : 아닐경우
x > 20 ? group = "senior333" : group = "junior333";
console.log(group);


const animal = 'tiger222'

switch(animal) {
    case 'lion':
        console.log("big");
        break;
        case 'tiger':
            console.log("big");
            break;
            case 'monkey':
                console.log("small");
                break;
                default:
                    console.log("not animal")

}