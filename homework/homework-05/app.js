const txtName  = document.getElementById("textName");
const txtPoint = document.getElementById("textPoint");
const btnAdd   = document.getElementById("btnAdd");
const deleteEl = document.querySelectorAll("#delete");
const updateEl = document.querySelectorAll("#update");
const tamamEl  = document.querySelectorAll("#tamam");
const iptalEl  = document.querySelectorAll("#iptal");
const tblStudentsTbody = document.querySelector("tbody");
let index     = 0;
let toplam    = 0;
let ortalama  = 0;
let sayi      = 1;

/* window.addEventListener("DOMContentLoaded", () => {
    ekle();
  });
 */

  const ekle = () =>{
    if(!txtName || !isNaN(txtName)){
        txtName.value  = "";
        txtPoint.value = "";
        txtName.focus();
        return;
    }
    const newList = document.createElement("tr");
    newList.innerHTML =`
    <td> ${++index} </td>
    <td> ${txtName.value} </td>
    <td> ${txtPoint.value} </td>
    <td> 
    <span class="silme"> 
    <button class="duzenle"> <i class="fa-solid fa-pen"></i> </button> 
    <button id="delete"><i class="fa-solid fa-trash-can"></i> </button>
     </span> 
     <span class="yenileme d-none"> 
     <button class="btn"> <i class="fa-solid fa-check"></i> </button> 
     <button class="btn"><i class="fa-solid fa-xmark"></i> </button>
      </span> 
     </td>`;
     tblStudentsTbody.append(newList);
  }
 
  btnAdd.addEventListener("click", () => {
    ekle();
  });
 
 
  const sil = () => {
    document.querySelectorAll("#delete").forEach((button) => {
      button.onclick = (e) => {
        const trEl = e.target.closest("tr");
        const name = trEl.querySelector("td:nth-child(2)").innerText;
        const point = Number(trEl.querySelector("td:nth-child(3)").innerText);
        const result = confirm(`Are you sure to delete ${name} ?`);
        if (result) {
          trEl.remove();
        }
      /*   average(indexAlma(), toplamAlma()); */
      };
    });
  }; sil();