let slide = document.getElementById('slide');
let up = document.getElementById('up');
let down = document.getElementById('down');
let x=0;

up.onclick=function(){
    // content height is 300 px
    if(x>'-900'){
    // 0 se start aur 3 baar upar jaaega
     x=x-300;
    }
    else{
        x=0;
    }
    slide.style.top=x+"px";
}

down.onclick=function(){
    if(x<0){
     x=x+300;
     slide.style.top=x+"px";
    }
    
}
