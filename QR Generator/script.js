let qr = document.getElementById('qrImg');
let text = document.getElementById('i');
let qrBox = document.getElementById('imgBox');
let dbtn = document.querySelector(".btn2");
let download = document.querySelector(".dbtn");
let find = document.querySelector(".btn button")

console.log(find);

function generateQR(){

    if(text.value===""){
       text.classList.add("error");
       text.style.borderColor="red";
       qrBox.classList.remove("showImg");
       dbtn.style.display = "none";
       find.style.backgroundColor="red";

       setTimeout(() => {
        text.classList.remove("error");
        text.style.borderColor="#494eea";
       } ,1000);
     

       setTimeout(() => {
        find.style.backgroundColor="#494eea";
       } ,1000);
     
      
    }


  else{
      qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + text.value ;
      qrBox.classList.add("showImg");
      dbtn.style.display = "block";
   }


}

function downloadQR(){
    let img = document.getElementById('qrImg');
    let imgAtrr=img.getAttribute('src');
    console.log(imgAtrr);
    dbtn.setAttribute("href",imgAtrr);
}