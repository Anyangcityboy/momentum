const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function createClock() {
  const timeNow = new Date();
  const clockPart = document.querySelector(".clock");

  const year = String(timeNow.getFullYear());
  const month = String(timeNow.getMonth() + 1);
  const date = String(timeNow.getDate());
  const day = dayList[timeNow.getDay()];
  const hour = String(timeNow.getHours()).padStart(2, 0);
  const min = String(timeNow.getMinutes()).padStart(2, 0);
  const sec = String(timeNow.getSeconds()).padStart(2, 0);

  //clockPart.classList.remove("hide");
  clockPart.innerText = `${year} ${month} ${date} ${day} ${hour} : ${min} : ${sec}`;
  //clockPart.classList.add("hide");
}

createClock();
setInterval(createClock, 1000);
