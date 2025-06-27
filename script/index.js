// header section script

// date script

const dateElement = document.getElementById('date');
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = today.toLocaleDateString(undefined, options);

// clock script

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString(); // You can customize the format
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // initial call
