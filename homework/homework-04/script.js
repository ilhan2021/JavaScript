const textAddEl = document.querySelector(".txtAdd");
const addBtnEl = document.querySelector("#addBtn");
const sortBtnEl = document.querySelector("#sortBtn");
const reverseBtnEL = document.querySelector("#reverseBtn");
const rmvLastBtnEl = document.querySelector("#rmvLastBtn");
const rmvFirstBtnEl = document.querySelector("#rmvFirstBtn");
const rmvAllBtnEl = document.querySelector("#rmvAllBtn");
const mixBtnEl = document.querySelector("#mixBtn");
const listOfArraysEl = document.querySelector("#listOfArrays");

const myArray =[];

const addArray = (add)=>{
    myArray.push(add);
    textAddEl.value ="";
    displayArray();

}
const sortArray=()=>{
    myArray.sort();
    displayArray();

}
const reverseArray=()=>{
    myArray.sort();
    myArray.reverse();
    displayArray();
}
const removeLastArray=()=>{
    myArray.pop();
    displayArray();
}
const removeFirstArray=()=>{
    myArray.shift();
    displayArray();
}
const removeAllArray=()=>{
    while(myArray.length){
        myArray.pop();
    }
    displayArray();
}
const mixArray=()=>{
   
    const tempArray = [];
    while (myArray.length) {
        tempArray.push(myArray.splice(Math.floor(Math.random() * myArray.length), 1));
    }
    for (const itemArray of tempArray) {
        myArray.push(itemArray);
    }





    displayArray();
}

const displayArray = (add)=>{
    let temp = "";
    if(myArray[0]=="")myArray.shift();
    for (const arrItem of myArray){ 
        temp +=`<li>${arrItem}</li>`
    }
    listOfArraysEl.innerHTML = temp;

};
mixBtnEl.addEventListener("click", mixArray);
rmvAllBtnEl.addEventListener("click", removeAllArray);
rmvFirstBtnEl.addEventListener("click", removeFirstArray);
rmvLastBtnEl.addEventListener("click", removeLastArray);
reverseBtnEL.addEventListener("click", reverseArray);
sortBtnEl.addEventListener("click", sortArray);
addBtnEl.addEventListener("click", ()=>{addArray(textAddEl.value)});
textAddEl.addEventListener("keyup", (e)=>{
    if(e.keyCode == 13) addArray(textAddEl.value);
});