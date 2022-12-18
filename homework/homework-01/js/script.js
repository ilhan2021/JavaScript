let sayi1;
let sayi2;
let islem;
const ekranEL=document.querySelector(".baslik");
function sayi(rakam){
    ekranEL.innerText += rakam;    
    ekranEL.innerText=Number(ekranEL.innerText);
}

function islemtype(type) {
    sayi1=Number(ekranEL.innerText);
    islem=type;
    ekranEL.innerText="";
}

function isaret(){
    ekranEL.innerText=Number(ekranEL.innerText)*(-1);
}
function nokta() {
    if(ekranEL.innerText.indexOf(".")<0 ){
        ekranEL.innerText =ekranEL.innerText +".";
    }

}
function sil() {
    ekranEL.innerText ="0";
    sayi1=0;
    sayi2=0;
    islem=0;
}
function ust() {
    sayi1=Number(ekranEL.innerText);
    ekranEL.innerText="";
    islem="^";
    
}
function hesapla(){
    sayi2= Number(ekranEL.innerText);
   
    switch(true) {
        case islem=="+": ekranEL.innerText = sayi1+sayi2;break;
        case islem=="-": ekranEL.innerText = sayi1-sayi2;break;
        case islem=="*": ekranEL.innerText = sayi1*sayi2;break;

        case islem=="/": ekranEL.innerText = sayi2==0?"0'a bolunmez":sayi1/sayi2;break;
        case islem=="%": ekranEL.innerText = sayi2==0?"0'a bolunmez":(sayi1*sayi2)/100;break;
        case islem=="^": ekranEL.innerText = Math.pow(sayi1,sayi2) ; break;
    }
}