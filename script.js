let clock= document.querySelector("clock");
updateTime=()=>{
    let Time= new Date();
    let hour= Time.getHours();
    let min= Time.getMinutes();
    let sec= Time.getSeconds();
    let am_pm= "AM";
    
    
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    
    
    let Timer = hour +":" +min +":" +sec +am_pm;
    
    document.querySelector(".hours").innerHTML= hour;
    document.querySelector(".Min").innerHTML= min;
    document.querySelector(".sec").innerHTML= sec;
    document.querySelector(".session").innerHTML= am_pm;
}
setInterval(updateTime, 1000);

updateTime();

