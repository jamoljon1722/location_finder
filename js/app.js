const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2")
const text3 = document.querySelector(".mini-text")

btn.addEventListener("click", ()=> {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            
            text.innerHTML = `Latitude: ${latitude}`
            text2.innerHTML = `Longitude: ${longitude}`
            text3.innerHTML = "Consolga Qarang"
            console.log(`Your Location ${latitude} ${longitude}`);

        });

    }

});