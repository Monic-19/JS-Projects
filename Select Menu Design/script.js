var selectField = document.getElementById('select-field');
var selectText = document.getElementById('selectText');
var options = document.getElementsByClassName('options');
var list = document.getElementById('list');
var arrow = document.getElementById('arrow');



 selectField.onclick = function(){
    list.classList.toggle("hide");
    arrow.classList.toggle('rotate');
 }

 for(i of options){
     i.onclick = function(){
         selectText.innerHTML=this.textContent;
         list.classList.toggle("hide");
         arrow.classList.toggle('rotate');
     }
  }