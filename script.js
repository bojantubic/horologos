function setClock() {
  const hourHand = document.querySelector(".hand-hour");
  const minuteHand = document.querySelector(".hand-minute");
  const secondHand = document.querySelector(".hand-second");

  const date = new Date();
  const hour = date.getHours() % 12;
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const hourDeg = hour * 30 + 0.5 * minute;
  const minuteDeg = minute * 6 + 0.1 * second;
  const secondDeg = second * 6;

  hourHand.style.transform = "rotate(" + (hourDeg - 180) + "deg)";
  minuteHand.style.transform = "rotate(" + (minuteDeg - 180) + "deg)";
  secondHand.style.transform = "rotate(" + (secondDeg - 180) + "deg)";

  setTimeout(setClock, 1000);
}

setClock();
