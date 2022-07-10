const search_len_drop_datalist_param = 3;

$("#search-input").keyup(function () {
  /* console.log("ku"); */
  if ($("#search-input").val().length >= search_len_drop_datalist_param) {
    // Enable
    $("datalist#search-datalist-disable").attr("id", "search-datalist-enabled");
    /*console.log("enable");*/
  } else {
    // Disable
    $("datalist#search-datalist-enabled").attr("id", "search-datalist-disable");
    /*console.log("disable");*/
  }
});
