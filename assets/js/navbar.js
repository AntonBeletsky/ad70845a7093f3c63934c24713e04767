/* <!-- <script src="https://kit.fontawesome.com/ad126f550b.js" crossorigin="anonymous"><   -->*/

/*<!-- РЕСПОНГСИВНОЕ МЕНЮ n -->*/

/* Gamburger */

let screen_mode = "desk"; /*  "smart" */
const width_param = 600;

function screenModeSwither() {
  if (screen_mode == "smart") {
    $(".responsive").removeClass("responsive");
    $(".hide-responsive").css("display", "none");
    screen_mode = "desk";
    /*alert('hide');*/
  } else {
    $("#itopnav.topnav").addClass("responsive"); /* широкие кнопки */
    $(".hide-responsive").css("display", "block");
    screen_mode = "smart";
    /*alert('show');*/
  }
}

/* возващает меню что б не пропадало  */

$(window).resize(function () {
  doc_width = document.body.clientWidth; /* $(document).width() dont work  */

  if (doc_width > width_param && screen_mode == "desk") {
    $(".responsive").removeClass("responsive");
    $(".hide-responsive").css("display", "block");
    screen_mode = "desk";
    console.log("remove respons");
  }
  if (doc_width <= width_param && screen_mode == "desk") {
    $(".responsive").removeClass("responsive");
    $(".hide-responsive").css("display", "none");
    screen_mode = "desk";
    console.log("remove respons");
  }
});

/* при переходе в смарт короткие кнопки , а это делает широкие исправлено doc_width */
function smart_fix() {
  $("#itopnav.topnav").addClass("responsive"); /* широкие кнопки */
  $(".hide-responsive").css("display", "block");
  screen_mode = "smart";
}

$(window).resize(function () {
  if (doc_width <= width_param) {
    // smart_fix();
  }
});

/* SIDEBAAAAAAAAAR*/

/* если сайд бар откріт то он главный гамбургер на респонсив
а если закрыт , то гамьбургер основной 
*/

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

  console.log("openNav");
  /*document.getElementById("itopnav").style.marginLeft = "250px";*/
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  document.getElementById("itopnav").style.marginLeft = "0px";

  console.log("closeNav");
}
