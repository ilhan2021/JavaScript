let sayi1;
let sayi2;
let islem;
const ekranEL=document.querySelector(".baslik");
function set1(){
    ekranEL.innerText+="1";
    ekranEL.innerText=Number(ekranEL.innerText);
}
function set2(){
    ekranEL.innerText+="2";
    ekranEL.innerText=Number(ekranEL.innerText);
}
function set3(){
    ekranEL.innerText+="3";
        ekranEL.innerText=Number(ekranEL.innerText);
}
function set4(){
    ekranEL.innerText+="4";
    ekranEL.innerText=Number(ekranEL.innerText);
}
function set5(){
    ekranEL.innerText+="5";
    ekranEL.innerText=Number(ekranEL.innerText);
}
function set6(){
    ekranEL.innerText+="6";
    ekranEL.innerText=Number(ekranEL.innerText);
}
function set7(){
    ekranEL.innerText+="7";
        ekranEL.innerText=Number(ekranEL.innerText);
}
function set8(){
    ekranEL.innerText+="8";
    ekranEL.innerText=Number(ekranEL.innerText);
}
function set9(){
    ekranEL.innerText+="9";
    ekranEL.innerText=Number(ekranEL.innerText);
}
function set0(){
    ekranEL.innerText+="0";
    ekranEL.innerText=Number(ekranEL.innerText);
}
function topla() {
    sayi1=Number(ekranEL.innerText);
    islem="+";
    ekranEL.innerText="";
}
function cikar() {
    sayi1=Number(ekranEL.innerText);
    ekranEL.innerText="";
    islem="-";
}
function carp() {
    sayi1=Number(ekranEL.innerText);
    ekranEL.innerText="";
    islem="*";
}
function bol() {
    sayi1=Number(ekranEL.innerText);
    ekranEL.innerText="";
    islem="/";
}
function mod() {
    sayi1=Number(ekranEL.innerText);
    ekranEL.innerText="";
    islem="%";
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