console.log("fail ühendatud");

let hours, minutes, seconds, day, month, year, dateTime;
let fontSize = 30;

function changeFontSizeBigger(){
    fontSize = fontSize + 5;
    if(fontSize > 200){
        fontSize = 200;
        window.alert("Fondi suurus ei saa olla üle 200 piksli");
    }
    document.getElementById('dateContainer').style.fontSize =  fontSize + "px";
    document.getElementById('clockContainer').style.fontSize =  fontSize + "px";
}

function changeFontSizeSmaller(){
    fontSize = fontSize - 5;
    if(fontSize < 10){
        fontSize = 10;
        window.alert("Fondi suurus ei saa olla alla 10 piksli");
    }
    document.getElementById('dateContainer').style.fontSize =  fontSize + "px";
    document.getElementById('clockContainer').style.fontSize =  fontSize + "px";
}

function upDateClock() {
    dateTime = new Date();

    hours = dateTime.getHours();
    minutes = dateTime.getMinutes();
    seconds = dateTime.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById('hours').innerHTML = hours + ":";
    document.getElementById('minutes').innerHTML = minutes + ":";
    document.getElementById('seconds').innerHTML = seconds;
}

function updateDate() {
    dateTime = new Date();

    const weekdays = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];
    let weekday = weekdays[dateTime.getDay()];

    day = dateTime.getDate();
    month = dateTime.getMonth() + 1;
    year = dateTime.getFullYear();

    if(day < 10) day = "0" + day;
    if(month < 10) month = "0" + month;

    document.getElementById('weekday').innerHTML = weekday + ",";
    document.getElementById('day').innerHTML = day + ".";
    document.getElementById('month').innerHTML = month + ".";
    document.getElementById('year').innerHTML = year;
}

function checkKey(e){
    console.log(e.keyCode);
    if(e.keyCode ==43){
        changeFontSizeBigger();
    }

    if(e.keyCode ==45){
    changeFontSizeSmaller();
    }

}

function updateTheme(){
    let hour = new Date().getHours();

    if(hour >= 6 && hour < 18){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
let manualTheme = false; 

function updateTheme(){
    if(manualTheme) return; 

    let hour = new Date().getHours();

    if(hour >= 6 && hour < 18){
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

function setLightTheme(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("themeToggle").textContent = "☀️";
}

function setDarkTheme(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("themeToggle").textContent = "🌙";
}

document.getElementById("themeToggle").addEventListener("click", () => {
    manualTheme = true;

    if(document.body.style.backgroundColor === "black"){
        setLightTheme();
    } else {
        setDarkTheme();
    }
});
window.addEventListener("keydown", (e) => {
    if(e.key === "+") changeFontSizeBigger();
    if(e.key === "-") changeFontSizeSmaller();
});

setInterval(updateTheme, 60000);
updateTheme();
upDateClock();
updateDate();
setInterval(upDateClock, 1000);
setInterval(updateDate, 60000);
document.getElementById('bigger').addEventListener('click', changeFontSizeBigger);
document.getElementById('smaller').addEventListener('click', changeFontSizeSmaller);
//ai aitas teha päeva/öö režiimi, mis põhineb kellaajal. 
