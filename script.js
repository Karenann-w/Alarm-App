let countdownInterval;

// Function to set the alarm
function setAlarm() {
  // Get the input value for alarm time
  const alarmTimeInput = document.getElementById("alarmTime");
  const alarmTime = alarmTimeInput.value;

  // Get the current time
  const now = new Date();

  // Convert the alarm time to a Date object
  const alarm = new Date(now.toDateString() + " " + alarmTime);

  // Check if the alarm time is in the future
  if (alarm > now) {
    // Calculate the time remaining until the alarm
    const timeRemaining = alarm - now;

    // Set the alarm status message
    const alarmStatus = document.getElementById("alarmStatus");
    alarmStatus.innerHTML = "Alarm set for " + alarmTime;

    // Start a timer to update the countdown
    countdownInterval = setInterval(() => {
      // Calculate the remaining time
      const currentTime = new Date();
      const remainingTime = alarm - currentTime;

      // Check if the countdown has reached zero
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        alarmStatus.innerHTML = "ALARM!";
        // Play an alarm sound
        const audio = new Audio("rooster_crowing-7027.mp3");
        audio.play();
      } else {
        // Convert the remaining time to minutes and seconds
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Update the alarm status message with the countdown
        alarmStatus.innerHTML = `Alarm set for ${alarmTime}. Countdown: ${minutes}m ${seconds}s`;
      }
    }, 1000); // Update the countdown every second
  } else {
    alert("Please select a future time for the alarm.");
  }
}