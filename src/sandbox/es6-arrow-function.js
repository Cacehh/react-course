const square = function (x) {
    return x * x;
};


// Arrow function Verbose syntax
// Always anonymous, no function name
// const squareArrow = (x) => {
//     return x * x;
// };

// Arrow function expression syntax
const squareArrow = (x) => x * x;

console.log(squareArrow(8));

let FullName = "Mark Robber";

const getFirstName = (FullName) => {
    return FullName.split(' ')[0];
}

const getFirstNameExpression = (FullName) => FullName.split(' ')[0];

console.log(getFirstName(FullName));
console.log(getFirstNameExpression(FullName));