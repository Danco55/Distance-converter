
const decimterEl = document.getElementById("decimeter");
const meterEl = document.getElementById("meter");
const centimeterEl = document.getElementById("centimeter"); 

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "decimeter":
      meterEl.value = (currentValue / 10).toFixed(2);
      centimeterEl.value = (currentValue * 10).toFixed(2);
      break;
    case "meter":
      decimterEl.value = (currentValue * 10).toFixed(2);
      centimeterEl.value = (currentValue * 100).toFixed(2);
      break;
    case "centimeter":
      decimterEl.value = (currentValue / 10).toFixed(2);
      meterEl.value = (currentValue / 1000);
      break;
      default:
        break;
  }
}