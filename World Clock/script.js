const updateTime = () =>{
  const date = new Date();
  document.getElementById('usa').innerText= date.toLocaleString('en-US', {timeZone:'America/Los_angeles'} ).split(',')[1] ;
  document.getElementById('ind').innerText= date.toLocaleString('en-US', {timeZone:'Asia/Kolkata'} ).split(',')[1] ;
  document.getElementById('can').innerText= date.toLocaleString('en-US', {timeZone:'Canada/Atlantic'} ).split(',')[1] ; 

  let t1=date.toLocaleString('en-US', {timeZone:'America/Los_angeles'} ).split(',')[1] ;
  updateClocku(t1);

  let t2=date.toLocaleString('en-US', {timeZone:'Asia/Kolkata'} ).split(',')[1] ;
   updateClocki(t2);

  let t3=date.toLocaleString('en-US', {timeZone:'Canada/Atlantic'} ).split(',')[1] ;
   updateClockc(t3);
}
setInterval(updateTime,1000)


function updateClocku(time){
  let htime=time.split(':')[0];
  let mtime=time.split(':')[1];
  let stime=time.split(':')[2];
  stime=parseInt(stime);
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    Hourhandu.style.transform = `rotate(${hrotation}deg)`;
    Minhandu.style.transform = `rotate(${mrotation}deg)`;
    Sechandu.style.transform = `rotate(${srotation}deg)`;
}

function updateClocki(time){
  let htime=time.split(':')[0];
  let mtime=time.split(':')[1];
  let stime=time.split(':')[2];
  stime=parseInt(stime);
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    Hourhandi.style.transform = `rotate(${hrotation}deg)`;
    Minhandi.style.transform = `rotate(${mrotation}deg)`;
    Sechandi.style.transform = `rotate(${srotation}deg)`;
}

function updateClockc(time){
  let htime=time.split(':')[0];
  let mtime=time.split(':')[1];
  let stime=time.split(':')[2];
  stime=parseInt(stime);

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    Hourhandc.style.transform = `rotate(${hrotation}deg)`;
    Minhandc.style.transform = `rotate(${mrotation}deg)`;
    Sechandc.style.transform = `rotate(${srotation}deg)`;
}

function uopenit(){
let a = document.getElementById('u');
let b = document.getElementById('ubtn');
let c =document.getElementById('ucard');
console.log(c);

if(a.style.display != "none"){
  a.style.display="none";
  c.style.height="220px";
  b.style.background="white";
  b.style.color="black";
}
else{
  a.style.display="block"
  b.style.background="black";
  b.style.color="white";
  c.style.height="420px";
}

}


function iopenit(){
  let a=document.getElementById('i');
  let b = document.getElementById('ibtn')
  let c =document.getElementById('icard');
  
  if(a.style.display != "none"){
    a.style.display="none";
    c.style.height="220px";
    b.style.background="white";
    b.style.color="black";
  }
  else{
    a.style.display="block"
    b.style.background="black";
    b.style.color="white";
    c.style.height="420px";
  }
  
  }
  
  function copenit(){
    let a=document.getElementById('c');

    let b = document.getElementById('cbtn');
    let c =document.getElementById('ccard');

    
    if(a.style.display != "none"){
      a.style.display="none";
      c.style.height="220px";
      b.style.background="white";
      b.style.color="black";
    }
    else{
      a.style.display="block"
      b.style.background="black";
      b.style.color="white";
      c.style.height="420px";
    }
    
    }
    
      