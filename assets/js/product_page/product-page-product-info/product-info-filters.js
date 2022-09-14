/* product filters buttons classes click events */

$(".pif-btn-default").click(function () {
  console.log("div.pif-btn-default");
});

$("div.pif-btn-default").click(function () {
  /* remove old active btn */

  /* div */
  $(".product-info-filters-filter-control > div.pif-btn-active").addClass(
    "pif-btn-default"
  );
  $(".product-info-filters-filter-control > div.pif-btn-active").removeClass(
    "pif-btn-active"
  );

  /* input*/
  $($(".product-info-filters-filter-control > input[checked]")[0]).removeAttr(
    "checked"
  );

  /************************************************************* */

  /* select new filter (radio button ) */
  /*div btn*/

  $(this).removeClass("pif-btn-default").addClass("pif-btn-active");
  /* input */
  /*$(this).parent().find("input").attr("checked", "checked");*/
  $(this).parent().find("input").checked = true;
});

$("div.pif-btn-active").click(function () {
  console.log("div.pif-btn-active");
});
