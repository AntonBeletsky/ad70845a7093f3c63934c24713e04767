/* buttons classes click events */

/* select filter */
/*
определить кнопку которую кликнули
не дать кликнуть дизаблед
запомнить зис
поставить акт на деф
зис на акт

поменять заголовок 
*/

$("div.pif-btn-default").click(function () {
  /* input = $($(this)[0]).prev()[0];*/
  /*console.log($($(this)[0]).prev()[0]);*/
  /* div .btn*/
  /*console.log($($(this)[0])[0]);*/

  /* remove old active btn */
  /* div */
  $($(".product-info-filters-filter-control > div.pif-btn-active")[0])
    .removeClass("pif-btn-active")
    .addClass("pif-btn-default");
  /* input*/
  $($(".product-info-filters-filter-control > input[checked]")[0]).removeAttr(
    "checked"
  );

  /* select new filter (radio button ) */
  /*div btn*/
  $(this).removeClass("pif-btn-default").addClass("pif-btn-active");
  /* input */
  $($(this)).prev().attr("checked", "checked");

  console.log($(this));
  console.log("def");
});

$("div.pif-btn-active").click(function () {
  console.log("active lol kurwa");
});
