$(document).ready(function () {
    // https://tproger.ru/articles/localstorage/

    /* TODO: grid here*/
    
    setCatalogView();
});

let setCatalogView = function () {

    let products_view_class = localStorage.getItem('div.products.view');

    $("div.products")
        .removeClass("catalog-view-list catalog-view-grid")
        .addClass(products_view_class);


    $("button.grid-btn").removeClass("active");

    switch (products_view_class) {
        case "catalog-view-list":
            $("button.grid-btn#set_list").addClass("active");
            break;
        case "catalog-view-grid":
            $("button.grid-btn#set_grid").addClass("active");
            break;
        default:
            console.log("error " + products_view_class + " .");
    }

    return true; 
};
