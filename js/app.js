const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".mini-text");

btn.addEventListener("click", ()=> {
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, checkError)
    }
    
    else {
        text.innerHTML = "Locatseni Yoq Bro Topolmadim"
    }
});

const checkError = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
        
        setInterval(() => {
            text.innerHTML = "Locatseni Yoq Topomadim Chota"
        },3000);
        
        break;
        case error.PERMISSION_UNAVAILABLE:
        text.innerHTML = "Joylashuv Haqida Malumot"
        break;
        case error.TIMEOUT:
        text.innerHTML = "Manzilingiz"
    }
};

const showLocation = async (position) => {
    let response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
    
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    text2.innerHTML = `Latitude ${latitude}`
    text3.innerHTML = `Longitude ${longitude}`
    console.log(`Your Location ${latitude} ${longitude}`);
    
    let data = await response.json();
    console.log(data.address);
    
    text.innerHTML = `${data.address.country}, ${data.address.city}, ${data.address.neighbourhood}`
};
