const checkmode = document.getElementsByTagName("input");
function darkmodefunc(x) {
  if (x.checked) {
    document.getElementById("body").style.backgroundColor = "#693c60";
    document.getElementById("body").style.color = "#ccbec9";
} else {
    document.getElementById("body").style.backgroundColor = "#ccbec9";
    document.getElementById("body").style.color = "#693c60";
  }
}
