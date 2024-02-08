console.log('arrow function 2 loaded');

// const add = function (a,b) {
const add = (a, b) => {
    // arguments no longer available in arrow functions
    // console.log(arguments);
    return a + b;
};

console.log(add(10, 40));


// this keyword - no longer bound
const user = {
    name: 'Cayce',
    languages: ['Filipino', 'English', 'Mandarin', 'Nihongo'],
    
    printLanguages() {

        //Map method
        return this.languages.map((language) => this.name + ' knows to speak: ' + language);

        //Full Map method
            // const fullMap = this.languages.map((language) => {
            //     return language
            // });


        // printLanguages: function () {
            // console.log(this.name);
            // console.log(this.languages);
        // Bound ends here and cannot enter 
        // the forEach function if its not an arrow function
        // One workaround is to add
            // const that = this;   
        // We can now use the variable that.name inside a 
        // nested function

        // this.languages.forEach(function (language) {
        //     console.log(that.name + ' knows: ' + language);
        // });
        // this.languages.forEach((language) => {console.log(this.name + ' knows: ' + language);}) 
    }
};

// console.log(user.printLanguages());


// Challenge area

const multiplier = {
    // Array of numbers
    numbers: [2, 4, 6, 8],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.numbers);
console.log(multiplier.multiply());