const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchWeather]'); 
const userContainer = document.querySelector('.weather-container');

const grantAccessContainer = document.querySelector('.grant-location-container');
const searchForm = document.querySelector('[data-searchForm]');
const loadingScreen = document.querySelector('.loading-container');
const userInfoContainer = document.querySelector('.user-info-container');

let currentTab = userTab;
const API_KEY = "e072993a2468923ec6b95c350ded12d8";
currentTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            // weather display hoga , pehele local check karega
            getfromSessionStorage();
        }
    }

}

userTab.addEventListener("click", () => {
    switchTab(userTab);
} );

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
} );

function getfromSessionStorage(){ 
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}
 
async function fetchUserWeatherInfo(coordinates){
    const{lat,long} = coordinates;
    // pehle grant location wale ko hatao
    grantAccessContainer.classList.remove("active");
    // loader lagao
    loadingScreen.classList.add("active");
    //usko hatake details dikhao
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`);
        const data = response.json;
        loadingScreen.classList.remove("active");

        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
    }

}

function renderWeatherInfo(data){
    //pehle elemet fetch 
    const cityname = document.querySelector('[data-cityName]');
    const countryIcon = document.querySelector('[data-countryIcon]');
    const desc = document.querySelector('[data-weatherDesc]');
    const weatherIcon = document.querySelector('[data-weatherIcon]');
    const temp = document.querySelector('[data-temp]');
    const windspeed = document.querySelector('[data-windspeed]');
    const humidity = document.querySelector('[data-humidity]');
    const cloudiness = document.querySelector('[data-cloudiness]');

     // value fetch karke data change kardo 

     cityname.innerText = data.name;
     countryIcon.src = `https://flagcdn.com/144x108/${data.sys.country.toLowerCase()}.png`;
     desc.innerText = data.weather[0].description;
     weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
     temp.innerText = data.main.temp + " °C";
     windspeed.innerText = data.wind.speed + " m/s";
     humidity.innerText = data.main.humidity + " %";
     cloudiness.innerText = data.clouds.all + " %";

}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("Location not granted");
    }
}

function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordiantes", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector(" [data-grant-access] ");
grantAccessButton.addEventListener( "click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        alert("error!");
    }
}