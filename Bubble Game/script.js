function createBubble(){
    var clutter = "";
    
    for(i = 1; i <= 136 ; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector(".bubbleBox").innerHTML = clutter;
}

function setTimmer(){
    let timer = 20;
    var Timervalue = setInterval(()=>{
        if(timer > 0){
            document.querySelector(".val2").innerHTML = timer--;
        }
        else{
            document.querySelector(".val2").innerHTML = 0;
            clearInterval(Timervalue);
            alert("Times Up")
            document.querySelector(".bubbleBox").innerHTML = `<h1>Score : ${score}</h1>`;
            document.querySelector(".start").style.display = "block";
        }
     
    } , 1000)
    

}

function getHit(){
    var rn = Math.floor(Math.random()*10);
    hitRn = rn;
    document.querySelector(".val1").innerHTML = rn;

} 

function increseScore(){
    score += 10;
    document.querySelector(".val3").innerHTML = score;
} 

document.querySelector(".bubbleBox").addEventListener("click", function(delts){ 
   clickedNumber =  Number(delts.target.textContent);
   if(hitRn == clickedNumber){
    increseScore();
    getHit();
    createBubble();
   }
})


let score = 0;
let hitRn = 0;

document.querySelector(".start").addEventListener("click", function(){
    document.querySelector(".start").style.display = "none";
    createBubble();
    setTimmer();
    getHit();
})


