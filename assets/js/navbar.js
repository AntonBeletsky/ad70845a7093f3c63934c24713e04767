/* <!-- <script src="https://kit.fontawesome.com/ad126f550b.js" crossorigin="anonymous"><   -->*/

/*<!-- РЕСПОНГСИВНОЕ МЕНЮ n -->*/

/* Gamburger */

let screen_mode = "desk"; /*  "smart" */
const width_param = 600; /*600*/

function set_display_none_nav() {
  $(".topnav-base-block").attr("style", "display: none !important;");
}

function set_display_flex_nav() {
  $(".topnav-base-block").attr("style", "display: flex !important;");
}

function screenModeSwither() {
  if (screen_mode == "smart") {
    $(".responsive").removeClass("responsive");
    $(".hide-responsive").css("display", "none");

    set_display_none_nav();

    screen_mode = "desk";
    /*alert('hide');*/
  } else {
    $("#itopnav.topnav").addClass("responsive"); /* широкие кнопки */
    $(".hide-responsive").css("display", "block");

    set_display_flex_nav();
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

    set_display_none_nav();
    console.log("remove respons");
  }
});

/* при переходе в смарт короткие кнопки , а это делает широкие исправлено doc_width */
function smart_fix() {
  $("#itopnav.topnav").addClass("responsive"); /* широкие кнопки */
  $(".hide-responsive").css("display", "none");
  screen_mode = "smart";
}

$(window).resize(function () {
  if (doc_width <= width_param) {
    /*smart_fix();*/
  }
});

/* SIDEBAAAAAAAAAR*/

/* если сайд бар откріт то он главный гамбургер на респонсив
а если закрыт , то гамьбургер основной 
*/

function openNav() {
  document.getElementById("isidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

  console.log("openNav");
  /*document.getElementById("itopnav").style.marginLeft = "250px";*/
}

function closeNav() {
  document.getElementById("isidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  document.getElementById("itopnav").style.marginLeft = "0px";

  console.log("closeNav");
}

/**********************/
/* new ham */
/*
var ham = 1;

$(document).ready(function () {
  $(".topnav-base-block").attr(
    "style",
    "display: none !important; position: fixed;"
  );
  console.log("none");
  ham = 0;
});

$("a.gamburger-smart-icon").click(function () {
  console.log('a.gamburger-smart-icon"');

  if (ham == 1) {
    $(".topnav-base-block").attr(
      "style",
      "display: none !important; position: fixed;"
    );
    console.log("none");
    ham = 0;
  } else {
    $(".topnav-base-block").attr(
      "style",
      "display: flex !important; position: relative;"
    );
    ham = 1;
    console.log("flex");
  }
});
*/
