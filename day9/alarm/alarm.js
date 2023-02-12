
const currentTime = document.querySelector('h1');
const audio = new Audio('alarm_ringtone.mp3');



audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;

const upcomingAlarmList = document.querySelector('#upcoming-alarms-list');
const addAlarm = document.querySelector('.setAlarm');

const alarmList = [];


function ring(realTime) {
    audio.play();
    alert(`It's ${realTime}`);
}


function updateTime() {
    var today = new Date();
    const hour = formatTime(today.getHours());
    const minutes = formatTime(today.getMinutes());
    const seconds = formatTime(today.getSeconds());
    var session=document.getElementById("sess")
    if(hour>=12){
        session.innerHTML='PM';
       }
    else{
        session.innerHTML='AM';
       }
    if(hour>12){
        hour=hour-12;
       }
    

    const realTime = `${hour}:${minutes}:${seconds}`;

    currentTime.innerText = `${hour}:${minutes}:${seconds}`;

    let curr_date = today.getDate();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    let month_name = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let showDay = document.querySelectorAll(".day span");
    showDay.innerHTML = `${month_name[month]} ${curr_date} ${year}`;
    showDay[day].style.opacity = "1";





    if (alarmList.includes(realTime)) {
        ring(realTime);
    }
}
setInterval(updateTime, 10);

function formatTime(time) {
    if (time < 10 && time.length != 2) {
        return '0' + time;
    }
    return time;
}


function stopAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }
}


upcomingAlarmList.addEventListener('click', e => {
    if (e.target.classList.contains("deleteAlarm")) {
        e.target.parentElement.remove();
    }
});


remove = (value) => {
    let newList = alarmList.filter((time) => time != value);
    alarmList.length = 0; 
    alarmList.push.apply(alarmList, newList);
}



function addNewAlarm(newAlarm) {
    const html = 
    `<li class = "time-list">        
        <span class="time">${newAlarm}</span>
        <button class="deleteAlarm" onclick = "remove(this.value)" value=${newAlarm}>delete</button>       
    </li>`
    upcomingAlarmList.innerHTML += html
};


addAlarm.addEventListener('submit', event => {

    event.preventDefault();

    let hour = formatTime(addAlarm.hr.value);
    if (hour === '0') {
        hour = '00'
    }
    let minute = formatTime(addAlarm.min.value);
    if (minute === '0') {
        minute = '00'
    }
    let second = formatTime(addAlarm.sec.value);
    if (second === '0') {
        second = '00'
    }

    const newAlarm = `${hour}:${minute}:${second}`

    if (isNaN(newAlarm)) {
        if (!alarmList.includes(newAlarm)) {
            alarmList.push(newAlarm);
            addNewAlarm(newAlarm);
            addAlarm.reset();
        } else {
            alert(`Alarm for ${newAlarm} already set.`);
        }
    } else {
        alert("Invalid Time Entered")
    }
})


