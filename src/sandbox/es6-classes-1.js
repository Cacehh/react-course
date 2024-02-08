console.log('classes loaded');

class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name ;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi my name is ' + this.name + '!';
        // template strings
        return `Hi my name is ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    // hasHomeLocation() {
    //     return !!this.homeLocation
    // }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.HomeLocation) {
            greeting +=` I'm visiting from ${this.homeLocation}`;
        } 
            return greeting;
    }
}

console.log('-------------------------');
const me = new Person('Cayce Dy', 12, 'Information Technology');
// console.log(me.getGreeting());
// console.log(me.getDescription());
console.log(me);

const other = new Person()
// console.log(other.getGreeting());
// console.log(other.getDescription());
console.log(other);

console.log('-------------------------');
const sutdentMe = new Student('Cayce Dy', 13, 'Information Technology')
console.log(sutdentMe);
console.log(sutdentMe.hasMajor());
console.log(sutdentMe.getDescription());

console.log('-------------------------');
const travelerMe = new Traveler('Casey Neistat', 40, 'Baguio City')
console.log(travelerMe.getGreeting());

console.log('-------------------------');
const travelerYou = new Traveler('Iron Man', 34)
console.log(travelerYou.getGreeting());