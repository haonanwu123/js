
// let aantalmensen;
// aantalmensen = 10;
// aantalmensen = aantalmensen + 5;
// console.log(aantalmensen);

// const result = prompt('How old are you?', '18');
// alert(`You are ${result}`);
// const myAge = confirm('Are you aldut?');
// if(myAge){
//     alert('You are older than 18.')
// }else{
//     alert('You are yonger than 18.')
// }

// const myName = 'Haonan Wu';
// console.log(myName);
// console.log(myName.toUpperCase());


// let totalMoneny = 0;
// totalMoneny = totalMoneny + 200;
// totalMoneny = totalMoneny - 100;

// if (totalMoneny = 100) {
//     console.log(totalMoneny);
// }

// const x = 2;
// const y = x + 2;
// console.log(y)

// const q = x - 2;
// console.log(q);

// const w = x * 2;
// console.log(w);

// const e = x / 2 ;
// console.log(e);

// const r = x % 1;
// console.log(r);

// const t = x ** 2;
// console.log(t);


// alert(5 == 5);
// alert(5 === 5);
// alert(5 === '5');//false
// alert(5 > 3);
// alert(5 < 7);
// alert(5 >= 4);
// alert(5 <= 7);

// const x = 20;
// const y = 21;
// alert('x' > 'y');//false
// alert('x' < 'y');

// const myAge = prompt('How old are you?')
// if (myAge >= 18) {
//     alert('You are aldut.');
// } else if (myAge < 18 && myAge >= 12) {
//     alert('You are teenager.');
// } else {
//     alert('You mast watch this video with your parents.')
// }


// const agePlayerOne = 20;
// const agePlayerTwee = 16;

// function isOudEnough(playerAge) {
//     let oudEnough = false;
//     if (playerAge >= 18) {
//         oudEnough = true;
//     }
    
//     console.log(oudEnough);
// }

// isOudEnough(agePlayerOne);
// isOudEnough(agePlayerTwee);

// const agePlayerOne = 20;
// const agePlayerTwee = 16;

// function isOudEnough(playerAge){
//     let oudEnough = false;
//     if (playerAge >= 18) {
//         oudEnough = true;
//     }
    
//     return oudEnough;
// }

// const playerOneIsOudEnough = isOudEnough(agePlayerOne);
// const playerTweeIsOudEnough = isOudEnough(agePlayerTwee);

// console.log(playerOneIsOudEnough);
// console.log(playerTweeIsOudEnough);

// let number = 1;

// while (number < 10) {
//     console.log(number);
//     number++;
// }

// let number = 10;
// while (number >= 5) {
//     console.log(number);
//     number--;
// }

// for (let y = 1; y < 10; y++) {
//     console.log(y);
// }

// //------------------------------------------------------2.7---------------------------------------//

// //--------opdracht1---------//
// function buitentemperatuur(tem) {
//     if (tem < 10) {
//         document.body.innerHTML += 'het is onder dan 10.<br>'
//     }else if (tem < 16) {
//         document.body.innerHTML += 'dat het niet warm is, en dat deze beter een jas aan kan doen.<br>'
//     } else if (tem <24) {
//         document.body.innerHTML += 'dat het niet koud en niet heel warm is.<br>'
//     }else if (tem >= 24) {
//         document.body.innerHTML += 'dat de gebruiker geen jas aan hoef vandaag.<br>'
//     }else if (tem > 30) {
//         document.body.innerHTML += 'dat de gebruiker vandaag maar beter goed kan insmeren.<br>'
//     }
// }

// buitentemperatuur(20);
// buitentemperatuur(30);
// buitentemperatuur(-2);


10472220
// //--------------------opdracht2------------//
// function parameter(cijfer) {
//     if (cijfer >=1 && cijfer < 5.5) {
//         document.body.innerHTML += 'Je heb onvoldoende gehaald.<br>'
//     }else if (cijfer >= 5.5 && cijfer <= 10) {
//         document.body.innerHTML += 'Je heb voldoende gehaald.<br>'
//     }
// }

// parameter(3);
// parameter(6);
// parameter(100);



// //-----------opdrqacht3----------//
// let isEven;
// function even(userNumber) {
//     let answer = (userNumber % 2);
//     if (answer === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// isEven = even(8);
// console.log(isEven);

// isEven = even(9);
// console.log(isEven);

// isEven = even(1);
// console.log(isEven);

// isEven = even(12);
// console.log(isEven);

// const myName = 'Haonan Wu'
// console.log(myName);
// console.log(myName.toUpperCase());
// document.body.innerHTML += myName;
// document.body.innerHTML += myName.toUpperCase();


//---------------2.10array---------//

// const playNaam = ["john","jony","jone"];
// console.log(playNaam[1]);
// console.log(playNaam[0]);
// console.log(playNaam[2]);
// console.log(playNaam.length);
// console.log(playNaam[playNaam.length -3]);

// const tramRooster = ["den haag", 2, "15:30"];
// console.log(tramRooster[1]);

// const medewerker = ["haonan","ali","bendy","xi"];
// for(let i = 0; i < medewerker.length; i++) {
//     const mederwerkerNaam = medewerker[i];
//     console.log(mederwerkerNaam);
// }

// const myArray = ["1","2",3,"4","5"];
// myArray.pop("getal");
// console.log(myArray);

// myArray.push("nummer");
// console.log(myArray);

// myArray.pop();
// console.log(myArray.pop());

// console.log(myArray.includes(3));
// console.log(myArray.includes("3"));

// console.log(myArray.length);

// console.log("Haonan");
// function buttonFunction(){
//     alert("Je heeft op de link geclickt.")
// }

// const lijstItems = document.querySelectorAll(".lijst-item");

// console.log(lijstItems);

// for(let i = 0; i < 5; i++ ){
//     console.log(lijstItems[i]);
//     const lijstItem = lijstItems[i];
//     if(lijstItem){
//         lijstItem.addEventListener("click", buttonFunction);
//     }
// }

// console.log("haonan");

// const myNameInput = document.querySelector(".input");
// const btn = document.querySelector(".btn");
// const myNameOutput = document.querySelector(".output");

// btn.addEventListener("click", showName);
// myNameInput.addEventListener("keypress", (event) =>{
//     if(event.key === "Enter"){
//         showName();
//     }
// });

// function showName() {
//     const myName = myNameInput.value;
//     myNameOutput.innerHTML = myName;
// }
