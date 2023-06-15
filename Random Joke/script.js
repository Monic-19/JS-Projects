let joke = document.getElementById('joke');
let btn = document.getElementById('btn');
let url = "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?type=single";

async function getJoke(){
    let response = await fetch(url);
    let data = await response.json();
    joke.innerText=`${data.joke}`;
    
} 

function night(){
    document.getElementsByClassName('container')[0].style.backgroundColor = "#848181";
    document.getElementsByClassName('containerh3')[0].style.color = "white";
    document.getElementsByClassName('smili')[0].style.backgroundColor = "white";
    document.getElementById('day').style.display="block";
    document.getElementById('night').style.display="none";
    document.getElementById('btn').style.backgroundColor="white";
    document.getElementById('btn').style.Color="black";
    document.getElementById('joke').style.Color="black";
}


function day(){
    document.getElementsByClassName('container')[0].style.backgroundColor = "blanchedalmond";
    document.getElementsByClassName('containerh3')[0].style.color = "black";
    document.getElementsByClassName('smili')[0].style.backgroundColor = "black";
    document.getElementById('day').style.display="none";
    document.getElementById('night').style.display="block";
    document.getElementById('btn').style.backgroundColor="rgb(231, 189, 127)";
    document.getElementById('btn').style.Color="white";
    document.getElementById('joke').style.Color="white";
}