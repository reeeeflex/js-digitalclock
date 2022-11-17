const showTime = function () {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let timeOfDay = 'AM';

  if (hour === 0) {
    hour = 12;
  }
  if (hour >= 12) {
    hour -= 12;
    timeOfDay = 'PM';
  }
  // if hour is less than 10 hour is set to 0 + the hour
  hour = hour < 10 ? '0' + hour : hour;
  //   if minute is less than 10 minute is set to 0 + the minute
  minute = minute < 10 ? '0' + minute : minute;
  //   if seconds is less than 10 seconds is set to 0 + the seconds
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let time = hour + ':' + minute + ':' + seconds + ' ' + timeOfDay;

  document.getElementById('clock-display').innerText = time;
  document.getElementById('clock-display').innerContent = time;

  //   every 1 second show time will display the clock
  setTimeout(showTime, 1000);
};
showTime();
