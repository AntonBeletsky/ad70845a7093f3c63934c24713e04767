/*
JS for product filters on product page 
*/
/* $(".pif-btn-default").click(function () { bug */
$(".pif-btn").click(function () {
  /* remove old active btn */
  $(this)
    .parent()
    .parent()
    .find(".pif-btn-active")
    .addClass("pif-btn-default")
    .removeClass("pif-btn-active");

  /* input */
  $(this).parent().parent().find("input[checked]").removeAttr("checked");

  /* select new filter (radio button ) */
  /*div buttons */
  $(this).removeClass("pif-btn-default").addClass("pif-btn-active");
  /* input */
  $(this).parent().find("input").attr("checked", "checked");

  /* update selected-filter */
  $(this)
    .parent()
    .parent()
    .parent()
    .find(".product-info-filter-name")
    .find(".selected-filter-prodszie")
    .text($(this).text());
});
