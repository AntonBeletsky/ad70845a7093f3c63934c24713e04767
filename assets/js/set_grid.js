/* https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event */
/* https://api.jquery.com/click/ */
/* TODO: grid here*/

/* this code dore buttons in product page*/

$("#set_list").click(function () {
  localStorage.setItem("div.products.view", "catalog-view-list");
  setCatalogView();
});

$("#set_grid").click(function () {
  localStorage.setItem("div.products.view", "catalog-view-grid");
  setCatalogView();
});
