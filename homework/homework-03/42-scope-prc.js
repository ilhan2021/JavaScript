let randomNumber = 0;
const btnGuess = document.querySelector("#guessent");
const btnStart = document.querySelector(".btn-start");
const numEl = document.querySelector("#txtNumber");
const labelEl = document.querySelector("#lblResult");
const minRandomNumber = 1;
const maxRAndomNumber = 100;
let totalShot = 5;



const start = () => {
    randomNumber = generateRandomNumber(minRandomNumber,maxRAndomNumber);
    btnGuess.style.display = "inline";
    btnStart.innerHTML = "Reset Game";
    labelEl.innerHTML = "You have 5 rights, you have to be very careful";
    numEl.removeAttribute("disabled");
    numEl.focus();
}

const reset = () => {
    btnGuess.style.display = "none";
    btnStart.innerHTML = "Start Game";
    numEl.setAttribute("disabled","true");
}
const guess = () =>{
    let num = Number(numEl.value);
    num = num || 0;
    /*
    if(!num){
        num = 0;
    }
    */
    if(num === randomNumber){
        labelEl.innerHTML = "Congrats! You guessed the number";
        reset();
    }
    else if(num > randomNumber){
        totalShot = --totalShot;
        labelEl.innerHTML = `Your number is greater than the random number and ${totalShot} you have the right`;
       
    }
    else{
        totalShot = --totalShot;
        labelEl.innerHTML = `Your number is lesser than the random number ${totalShot} you have the right`;
        
    } if(totalShot==0){
        labelEl.innerHTML = `your right is over, our number of guesses: ${randomNumber}`;
        btnGuess.style.display ="none";
        btnStart.innerHTML= "Start over";
        totalShot=5;
    }
    
    
    //totalShot == 0? reset() : "";
    
    numEl.value="";
    numEl.focus();
}

btnGuess.addEventListener("click", guessent);
numEl.addEventListener("keyup", (event)=>{
    if(event.keyCode === 13){
        guess();
    }
});

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}