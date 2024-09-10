const randNumber1 = Math.floor(Math.random()*6) + 1;
console.log(randNumber1);


const diceNumber = `Dice${randNumber1}.png`;
console.log(diceNumber)


const diceImage = `images/${diceNumber}`
console.log(diceImage);



const image = document.querySelector('.img1');

image.setAttribute("src", diceImage);


//--------------------------PLAYER2---------------------------//
const randNumber2 = Math.floor(Math.random()*6) + 1;
console.log(randNumber2);


const diceNumber2 = `Dice${randNumber2}.png`;
console.log(diceNumber2)


const diceImage2 = `images/${diceNumber2}`
console.log(diceImage2);



const image2 = document.querySelector('.img2');

image2.setAttribute("src", diceImage2);


//-----------------------------CONDITION-------------------------//
if(randNumber1 > randNumber2){
    document.querySelector('h1').innerHTML = "Player1 Wins!!"
}else if(randNumber2 > randNumber1){
    document.querySelector('h1').innerHTML = "Player2 Wins!!"
}else{
    document.querySelector('h1').innerHTML = "Its a TIE!!! Refresh Again :/"
}