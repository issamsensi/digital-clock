function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
    changeBg(hours);
}

setInterval(updateClock, 1000);

function changeBg(hour){
    if(hour < 12 && hour > 5){
        document.querySelector("body").style.backgroundImage = "url(morning.png)";
    }else if(hour < 21 && hour >= 12){
        document.querySelector("body").style.backgroundImage = "url(evening.png)";
    }else{
        document.querySelector("body").style.backgroundImage = "url(night.png)";
    }
}