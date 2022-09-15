function productPageOpenPage(pageName) {
  /* hide all tabs */
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("product-page-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    console.log(tabcontent[i]);
  }

  /* show clicked tab */
  console.log(pageName);
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="prodpagedefaultOpen" and click on it
document.getElementById("prodPageDefaultOpen").click();

/************************************************************************ */

$("button[tabid]").click(function () {
  console.log;
});
