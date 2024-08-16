var display = false;
//adding class "anim" to selected input and remove it from others

function inp(d) {
  for (var i = 0; i < 2; i++) {
    document.getElementsByTagName("input")[i].className = "";
  }

  document.getElementsByTagName("input")[d].className += "anim";
}

// on blur changes class to "0" for selected input field

function noinp(d){
    document.getElementsByTagName('input')[d].className="0"
}

// // changes class to "0" for every input field

// for (var i = 0; i < 2; i++) {
//   document
//     .getElementsByTagName("input")[i]
//     .addEventListener("blur", function () {
//       for (var i = 0; i < 2; i++) {
//         document.getElementsByTagName("input")[i].className = "0";
//       }
//     });
// }
