$(document).ready(function () {
    // https://tproger.ru/articles/localstorage/

    let products_view_class = localStorage.getItem('div.products.view');

    $("div.products")
        .removeClass("catalog-view-list catalog-view-grid")
        .addClass(products_view_class);

    console.log("ready!");
});