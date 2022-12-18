let mode = "light";
const bodyEl = document.querySelector("body");
const dark = document.querySelector("btn-mode")
function setMode(){
    if(mode == "light"){
        bodyEl.classList.remove("light");
        bodyEl.classList.add("dark");
        mode = "dark";
    }
    else{
        bodyEl.classList.remove("dark");
        bodyEl.classList.add("light");
        mode = "light";
    }
    
}