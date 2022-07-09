/* city - tabname TODO: rename */
function openCategory(evt, tabnum) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="mega-menu-tabcontentt" and hide them
  tabcontent = document.getElementsByClassName("mega-menu-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab

  try {
    document.getElementById(tabnum).style.display = "block";
  } catch (error) {
    console.error(error);
    console.log("tabnum: " + tabnum);
  }

  evt.currentTarget.className += " active";
}
