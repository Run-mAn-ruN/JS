"use strict"
function showTime(){
    // Создаем объект дата и берем из знего значение времени.
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    //let session = "AM";
    
    //  Добавляем 0 в начале цифры, если число меньше 10. Например 06ч:04м:21с
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime)
}

showTime();