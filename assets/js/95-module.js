
import showAlert, { showConfirm } from "../js/modules/95-message.js";
document.getElementById("btn1").addEventListener("click", ()=>{
    showAlert("Hello JS");
})
document.getElementById("btn2").addEventListener("click", ()=>{
    showConfirm("Are you sure");
})