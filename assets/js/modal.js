/* vars */
const name_modal1 = "modal1";
const name_bnt1 = "open_modal_btn1";
const name_close_btn1 = "close_btn1";

// Get the modal
//var modal = document.getElementById("myModal");
var modal1 = document.getElementById(name_modal1);

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
var modal_btn1 = document.getElementById(name_bnt1);

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
var modal_span1 = document.getElementsByClassName(name_close_btn1)[0];

// When the user clicks the button, open the modal
modal_btn1.onclick = function () {
  modal1.style.display = "block";
  console.log("modal_btn1.onclick");
};

// When the user clicks on <span> (x), close the modal
modal_span1.onclick = function () {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
