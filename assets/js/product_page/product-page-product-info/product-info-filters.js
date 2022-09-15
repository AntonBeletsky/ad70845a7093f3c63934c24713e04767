/*
JS for product filters on product page 
*/

$("div.pif-btn-default").click(function () {
  /* save fieldset [name] */

  /* remove old active btn */
  /* +++ ! use fieldset [name]  !!!! */
  /* div */
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
  /* +++ !!! use fieldset [name] */
  $(".selected-filter-prodszie").text($(".pif-btn-active").text());
});
