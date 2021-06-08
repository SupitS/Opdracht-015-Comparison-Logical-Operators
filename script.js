// Opdracht 015: Comparison && Logical Operators

console.log('Hallo Winc Academy studenten');

const age = 18;
var number = 18;
if (number >= 18) {
    console.log('Welkom, kom binnen! ');
} else {
    console.log('Gezien uw leeftijd mogen wij u helaas niet binnenlaten.');
}

const isFemale = true;
if (isFemale) {
    console.log('You are a female');
} else {
    console.log('You are not a female');
}

const driverStatus = 'David';
if (driverStatus == 'Bob') {
    console.log('Jij bent BOB. ');
} else {
    console.log('Jij bent niet BOB en mag niet rijden.');
}

//below is Logical Operators, there are 2 conditions and both needs to be true
const myAge1 = 20
if (myAge1 >= 18 && myAge1 <= 25) {
    console.log('Je krijgt 50% korting!');
} else if (myAge1 >= 26 && myAge1 <= 50) {
    console.log('Kom gezellig binnen!');
} else {
    console.log('Gezien jouw leeftijd, mag je helaas NIET naar binnen.');
}


const name1 = 'Bram';
if (name1 == 'Bram' || name1 == 'Sarah') {
    console.log('Hoera, jij krijgt van ons een gratis bier!');
} else {
    console.log('Hoera, wij bestaan 50 jaar!');
}

const totalAmount = 30;
if (totalAmount >= 25 && totalAmount <= 49) {
    console.log('Gratis (vega)bitterballen!');
} else if (totalAmount >= 50 && totalAmount <= 99) {
    console.log('Gratis portie nachos!');
} else if (totalAmount >= 100) {
    console.log('Gratis flesje champagne!');
} else {

}


