const txtName = document.getElementById("txtName");
const txtPoint = document.getElementById("txtPoint");
const btnAdd = document.getElementById("btnAdd");
const deleteEl = document.querySelectorAll("#delete");
const updateEl = document.querySelectorAll("#update");
const tamamEl = document.querySelectorAll("#tamam");
const iptalEl = document.querySelectorAll("#iptal");
const tblStudentsTbody = document.querySelector("tbody");
let index = 0;
let toplam = 0;
let ortalama = 0;
let sayi = 1;

window.addEventListener("DOMContentLoaded", () => {
    ekle();
  });


  const ekle = () =>{
    if(!txtName || !isNaN(txtName)){
        txtName.value = "";
        txtPoint.value = "";
        txtName.focus();
        return;
    }
    const newList = document.createElement("tr");

  }
  btnAdd.addEventListener("click", () => {
    ekle();
  });
  const loadData = () => {
  let strHtml = "";

  students.forEach((student, index) => {
    strHtml += `<tr>
        <th scope="row">${index+1}</th>
        <td>${student.name}</td>
        <td class="score">${student.point}</td>
        <td><button class="btn-delete btn btn-danger">🗑️</button></td>
      </tr>`;
  });

  tblStudentsTbody.innerHTML = strHtml;
};


loadData();