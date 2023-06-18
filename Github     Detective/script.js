//Mode Switch

t1.addEventListener("click", changeMode);
ti1.addEventListener("click", changeMode);

let BlackMode = false;

function changeMode() {

    let container = document.querySelector('.container');
    let heading = document.querySelector('.heading');
    let data = document.querySelector('.data');
    let searchInput = document.querySelector('.search input');
    let searchOutputBtn = document.querySelector('.searchOutput button');
    let output = document.querySelector('.output');
    let mid = document.querySelector('.mid');
    let t1 = document.getElementById('t1');
    let ti1 = document.getElementById('ti1');

    if (BlackMode == false) {

        console.log("enter black mode");
        container.style.backgroundColor = "#0B2447";
        heading.style.color = "white";
        data.style.backgroundColor = "#A5D7E8";
        data.style.boxShadow = "0px 16px 30px 10px rgba(255, 255, 255, 0.28)";
        searchInput.style.color = "white";
        searchInput.classList.add("active");
        searchOutputBtn.style.backgroundColor = "#0B2447";
        searchOutputBtn.style.color = "white";
        output.style.backgroundColor = "#A5D7E8";
        output.style.color = "#0B2447";
        output.style.boxShadow = "0px 16px 30px 10px rgba(255, 255, 255, 0.28)";
        mid.style.backgroundColor = "#0B2447";
        mid.style.color = "white";
        t1.innerHTML = "Light";
        ti1.src = ("/assets/images/sun-icon.svg");

        BlackMode = true;
    }


    else {

        console.log("enter light mode");
        container.style.backgroundColor = "#FFD4B2";
        heading.style.color = "black";
        data.style.backgroundColor = "whitesmoke";
        data.style.boxShadow = "0px 16px 30px 10px rgba(70, 96, 187, 0.28)";
        searchInput.style.color = "black";
        searchInput.classList.remove("active");
        searchOutputBtn.style.backgroundColor = "#FFD4B2";
        searchOutputBtn.style.color = "black";
        output.style.backgroundColor = "whitesmoke";
        output.style.color = " #0B2447";
        output.style.boxShadow = "0px 16px 30px 10px rgba(70, 96, 187, 0.28)";
        mid.style.backgroundColor = "#FFD4B2";
        mid.style.color = "Black";
        t1.innerHTML = "Dark";
        ti1.src = ("/assets/images/moon-icon.svg");

        BlackMode = false;
    }
}


//api fetch 

let btn2 = document.getElementById("btn2");
let profile = document.getElementById('ui1');
let nameit = document.getElementById('name');
let nameLink = document.getElementById('nameLink');
let joinDate = document.getElementById('joinDate');
let bio = document.getElementById('bio');
let repos = document.getElementById('repos');
let followers = document.getElementById('followers');
let following = document.getElementById('following');
let ulocation = document.getElementById('location');
let website = document.getElementById('website');
let twitter = document.getElementById('twitter');
let company = document.getElementById('company');
let montharr =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let text = document.getElementById("input");

text.addEventListener( "keydown", function(e) {
    if(e.key=="Enter"){
        if (text.value !== "") {
            fetchUser(text.value);
        }
        else {
            alert("Enter something")
        }
    }
});

btn2.addEventListener("click", () => {

   let input = document.getElementById("input");

    if (input.value !== "") {
        console.log(input.value);
        fetchUser(input.value);
    }

    else {
        alert("Enter something")
    }

});

async function fetchUser(input) {
    let url = `https://api.github.com/users/${input}`;
    console.log(url);
    let noResult = document.querySelector('.searchOutput p');

    let response = await fetch(url);
    console.log(response);

    if (response.status == 404) {
        console.log('no data found');
        noResult.style.display = "block";
    }


    else {

        let data = await response.json();
        console.log(response);
        console.log(data);


       

        noResult.style.display = "none";

        console.log(data.avatar_url);
        profile.src = data.avatar_url;

        console.log(data.name);
        nameit.innerHTML = data.name;

        console.log(data.login);
        nameLink.href = data.html_url;
        nameLink.innerHTML = `@${data.login}`;

        console.log(data.created_at);
        let date = data.created_at.split("T");
        let date2 = date[0].split("-");
        let year = date2[0];
        let month = montharr[ date2[1] - 1 ];
        let day = date2[2];

        joinDate.innerHTML = "Joined : "+ day + " - " + month + " - " + year;

        console.log(data.bio);
        bio.innerHTML = data.bio;

        console.log(data.public_repos);
        repos.innerHTML = data.public_repos;

        console.log(data.followers);
        followers.innerHTML = data.followers;

        console.log(data.following);
        following.innerHTML = data.following;

        console.log(data.location);
        if(data.location == null){
            ulocation.innerHTML = "Not Mentioned";
        }
        else{
        ulocation.innerHTML = data.location.toUpperCase();
        }

        console.log(typeof(data.blog));
        if(data.blog== ""){
            website.innerHTML = "Not Mentioned";
        }
        else{
            website.innerHTML = data.blog;
        }
        
        
        console.log(data.twitter_username);
        if(data.twitter_username== null){
            twitter.innerHTML = "Not Mentioned";
        }
        else{
            twitter.innerHTML = data.twitter_username;
        }
      
        
        console.log(data.company);
        if(data.company == null){
            company.innerHTML = "Not Mentioned";
        }
        else{
            company.innerHTML = data.company;
        }
        
    }

}

fetchUser("monic-19");

