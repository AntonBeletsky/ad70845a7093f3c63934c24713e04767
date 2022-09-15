/*
JS for product filters on product page 
*/

$("div.pif-btn-default").click(function () {
  /* remove old active btn */
  $(".product-info-filters-filter-control > div.pif-btn-active")
    .removeClass("pif-btn-active")
    .addClass("pif-btn-default");
  /* input */
  $(".product-info-filters-filter-control > input[checked]").removeAttr(
    "checked"
  );

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
