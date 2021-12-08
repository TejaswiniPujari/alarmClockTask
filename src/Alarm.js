import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

let timer;
var sound = new Audio("song.mp3");

const setAlarm = () => {
  var time = document.getElementById("alarmTime").valueAsNumber;
  var alarm = new Date(time);
  var alarmTime = new Date(alarm.getUTCFullYear(),alarm.getUTCMonth(),alarm.getUTCDate(),alarm.getUTCHours(),alarm.getUTCMinutes(),alarm.getUTCSeconds());
  var duration = alarmTime.getTime() - new Date().getTime();
  if (duration < 0)
   {
    alert(`please check date and time . Note : Date should not be less than current date`);
    return;
  }
  document.getElementById("setButton").style.display = "none";
  timer = setTimeout(initAlarm, duration);
};
const initAlarm = () => {
    sound.loop = true;
    sound.play();
    document.getElementById("snoozeButton").style.display = "block";
    document.getElementById("stopButton").style.display = "block";
  };
const cancelAlarm = () => {
    document.getElementById("setButton").style.display = "block";
    clearTimeout(timer);
  };
const snoozeAlarm = () => {
    sound.pause();
    sound.currentTime = 0;
    document.getElementById("snoozeButton").style.display = "none";
    document.getElementById("stopButton").style.display = "none";
    sound.pause();
    sound.currentTime = 0;
    setTimeout(initAlarm, 300000);
  };
const stopAlarm = () => {
    sound.pause();
    sound.currentTime = 0;
    document.getElementById("snoozeButton").style.display = "none";
    document.getElementById("stopButton").style.display = "none";
    cancelAlarm();
    console.log("stopalarm called");
  };

const Alarm = () => {
  return (
    <div className="main">
      <input type="datetime-local" id="alarmTime" />
      <button id="setButton" onClick={setAlarm} className="btn btn-success">Set Alarm</button>
      <button id="cancelButton" onClick={cancelAlarm} className="btn btn-success" >Cancel Alarm</button>
      <button id="snoozeButton" onClick={snoozeAlarm} className="btn btn-warning">Snooze Alarm After 5 minutes</button>
      <button id="stopButton" onClick={stopAlarm} className="btn btn-danger">Stop Alarm</button>
      
    </div>
  )
};

export default Alarm;
