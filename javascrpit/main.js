/*
let aantalmensen;
aantalmensen = 10;
aantalmensen = aantalmensen + 5;
console.log(aantalmensen);


const result = prompt('How old are you?', '18');
alert(`You are ${result}`);
const myAge = confirm('Are you aldut?');
if(myAge){
    alert('You are older than 18.')
}else{
    alert('You are yonger than 18.')
}

const myName = 'Haonan Wu';
console.log(myName);
console.log(myName.toUpperCase());


let totalMoneny = 0;
totalMoneny = totalMoneny + 200;
totalMoneny = totalMoneny - 100;

if (totalMoneny = 100) {
    console.log(totalMoneny);
}

const x = 2;
const y = x + 2;
console.log(y)

const q = x - 2;
console.log(q);

const w = x * 2;
console.log(w);

const e = x / 2 ;
console.log(e);

const r = x % 1;
console.log(r);

const t = x ** 2;
console.log(t);


alert(5 == 5);
alert(5 === 5);
alert(5 === '5');//false
alert(5 > 3);
alert(5 < 7);
alert(5 >= 4);
alert(5 <= 7);

const x = 20;
const y = 21;
alert('x' > 'y');//false
alert('x' < 'y');

const myAge = prompt('How old are you?')
if (myAge >= 18) {
    alert('You are aldut.');
} else if (myAge < 18 && myAge >= 12) {
    alert('You are teenager.');
} else {
    alert('You mast watch this video with your parents.')
}


const agePlayerOne = 20;
const agePlayerTwee = 16;

function isOudEnough(playerAge) {
    let oudEnough = false;
    if (playerAge >= 18) {
        oudEnough = true;
    }
    
    console.log(oudEnough);
}

isOudEnough(agePlayerOne);
isOudEnough(agePlayerTwee);

const agePlayerOne = 20;
const agePlayerTwee = 16;

function isOudEnough(playerAge){
    let oudEnough = false;
    if (playerAge >= 18) {
        oudEnough = true;
    }
    
    return oudEnough;
}

const playerOneIsOudEnough = isOudEnough(agePlayerOne);
const playerTweeIsOudEnough = isOudEnough(agePlayerTwee);

console.log(playerOneIsOudEnough);
console.log(playerTweeIsOudEnough);

let number = 1;

while (number < 10) {
    console.log(number);
    number++;
}

let number = 10;
while (number >= 5) {
    console.log(number);
    number--;
}

for (let y = 1; y < 10; y++) {
    console.log(y);
}
/*/

function buitentemperatuur(tem) {
    if (tem < 10) {
        document.body.innerHTML += 'het is onder dan 10.<br>'
    }else if (tem < 16) {
        document.body.innerHTML += 'dat het niet warm is, en dat deze beter een jas aan kan doen.<br>'
    } else if (tem <24) {
        document.body.innerHTML += 'dat het niet koud en niet heel warm is.<br>'
    }else if (tem >= 24) {
        document.body.innerHTML += 'dat de gebruiker geen jas aan hoef vandaag.<br>'
    }else if (tem > 30) {
        document.body.innerHTML += 'dat de gebruiker vandaag maar beter goed kan insmeren.<br>'
    }

    return false;
}

buitentemperatuur(20);
buitentemperatuur(30);
buitentemperatuur(-2);


function parameter(cijfer) {
    if (cijfer >=1 && cijfer < 5.5) {
        document.body.innerHTML += 'Je heb onvoldoende gehaald.<br>'
    }else if (cijfer >= 5.5 && cijfer <= 10) {
        document.body.innerHTML += 'Je heb voldoende gehaald.<br>'
    }

    return false;
}

parameter(3);
parameter(6);
parameter(100);

function getal(gt) {
    if (gt % 2 === 0) {
        console.log(true);
    }else if (gt % 2 === 1) {
        console.log(false);
    }

    return false;
}

getal(1);
getal(2);
getal(101);
getal(100);