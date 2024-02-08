//  var
// Can be re assigned can be declared again
var FirstName = 'Rolf Cayce';
var LastName = 'Dy';

console.log(FirstName);

// let
//  Can be reasigned but not declared again
//  Block Scope - if defined inside a block(if, for) it wont be accessible.
//  ie    ç
let LetFirstName = 'Rolf Cayce';
LetFirstName = "Cayce"
console.log(LetFirstName);

// const
// Can never be re assigned to another value.
//  Block Scope

const ConstFirstName = "Rolf Cayce";


// ***********

var fullname = "Cayce Dy";

if (fullname) {
    var NameFirst = fullname.split(' ')[0];
    var NameLast = fullname.split(' ')[1];


}