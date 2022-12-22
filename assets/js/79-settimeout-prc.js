let menuTimeout = null;


document.querySelector("#menu").addEventListener("mouseenter", (e)=>{
    setTimeout( ()=>{
        e.target.classList.add("opened");
    }, 300)
    console.log("mouseover");
    
});
document.querySelector("#menu").addEventListener("mouseleave", (e)=>{
    e.target.classList.remove("opened");

    if(menuTimeout !== null){
        clearTimeout(menuTimeout);   
    }
 
    console.log("mouseleave");
});