// textboxlara girilen ad ve meslek degerlerine göre mesaj yazdirin.

function gonder() {
    let isim = document.querySelector("#ad").value;
    let meslek = document.querySelector("#meslek").value;
    let mesaj = document.querySelector("#mesaj");
    mesaj.classList.remove("d-none");
    mesaj.classList.add("d-block");
    if(!isim || !meslek){
        mesaj.innerText = "Lutfen formu eksiksiz doldurunuz"
    }else{
        mesaj.innerText = `Sayin ${meslek} ${isim} hosgeldiniz.`
    }

}

    function sil(){
        mesaj.innerText = "";
        mesaj.classList.add("d-none");
        
    }
    

