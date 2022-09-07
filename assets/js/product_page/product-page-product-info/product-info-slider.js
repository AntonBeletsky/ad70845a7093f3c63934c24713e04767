let pisSlideIndex = 1;
showPisSlides(pisSlideIndex);

function plusSlides(pis_n) {
  showPisSlides((pisSlideIndex += pis_n));
}

function currentSlide(pis_n) {
  showPisSlides((pisSlideIndex = pis_n));
}

function showPisSlides(pis_n) {
  let pis_i;
  let pis_slides = document.getElementsByClassName("product-info-slider");
  let dots = document.getElementsByClassName("product-info-demo-img");
  if (pis_n > pis_slides.length) {
    pisSlideIndex = 1;
  }
  if (pis_n < 1) {
    pisSlideIndex = pis_slides.length;
  }
  for (pis_i = 0; pis_i < pis_slides.length; pis_i++) {
    pis_slides[pis_i].style.display = "none";
  }
  for (pis_i = 0; pis_i < dots.length; pis_i++) {
    dots[pis_i].className = dots[pis_i].className.replace("pis-active", "");
  }
  pis_slides[pisSlideIndex - 1].style.display = "block";
  dots[pisSlideIndex - 1].className += " pis-active";
}
