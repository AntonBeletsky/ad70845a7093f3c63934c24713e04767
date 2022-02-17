/* https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event */
/* https://api.jquery.com/click/ */

$("#set_list").click(function () {
    $("div.products").removeClass("catalog-view-list catalog-view-grid").addClass("catalog-view-list");
});

$("#set_grid").click(function () {
    $("div.products").removeClass("catalog-view-list catalog-view-grid").addClass("catalog-view-grid");
});

