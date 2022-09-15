/* TODO: delite it 
function FuckproductPageOpenPage(pageName) {
  /* hide all tabs */ /*
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("product-page-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  /* show clicked tab */ /*
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="prodpagedefaultOpen" and click on it
document.getElementById("prodPageDefaultOpen").click();
*/
/************************************************************************ */

/* open tabs*/
$(".product-page-tabs button[tabid]").click(function () {
  var attr = $(this).attr("tabid");
  $(".product-page-tabcontent").css("display", "none");
  $($(".product-page-tabs #" + attr)).css("display", "block");

  $(".product-page-tablink-active").removeClass("product-page-tablink-active");

  $(this).addClass("product-page-tablink-active");
});
