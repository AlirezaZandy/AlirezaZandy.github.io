var display = false;

const baseurl = "https://hosseinshpr1380.github.io/silde-show/img/";
const imgs = {
  0: "img_lights_wide.jpg",
  1: "img_mountains_wide.jpg",
  2: "img_nature_wide.jpg",
  3: "img_snow_wide.jpg",
};
const dots = document.getElementsByClassName("dot");
let currentimg = document.getElementsByClassName("image");

function dotcolor(d) {
  for (var i = 0; i <= 3; i++) {
    document.getElementById("dot" + i).className = "dot";
  }
  document.getElementById("dot" + d).className = "dot dark";
}

function nextimg() {
  if (parseInt(currentimg[0].id) < 3) {
    let nimg = imgs[`${parseInt(currentimg[0].id) + 1}`];
    currentimg[0].src = baseurl + nimg;
    currentimg[0].id = parseInt(currentimg[0].id) + 1;
  } else {
    currentimg[0].src = baseurl + imgs["0"];
    currentimg[0].id = 0;
  }
  document.getElementById("counter").innerText = `${
    parseInt(currentimg[0].id) + 1
  }/4`;
  dotcolor(currentimg[0].id);
}

function previous() {
  if (parseInt(currentimg[0].id) > 0) {
    let pimg = imgs[`${parseInt(currentimg[0].id) - 1}`];
    currentimg[0].src = baseurl + pimg;
    currentimg[0].id = parseInt(currentimg[0].id) - 1;
  } else {
    currentimg[0].src = baseurl + imgs["3"];
    currentimg[0].id = "3";
  }
  document.getElementById("counter").innerText = `${
    parseInt(currentimg[0].id) + 1
  }/4`;
  dotcolor(currentimg[0].id);
}
