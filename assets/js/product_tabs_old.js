/* tabs click*/
function openPage(pageName, elmnt, color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        /*  hide all tabs*/
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";

        tablinks[i].classList.remove("active");
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    /* add border-buttom to tablink btn*/
    elmnt.classList.add("active");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();