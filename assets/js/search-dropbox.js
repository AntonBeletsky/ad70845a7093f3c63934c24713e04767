const search_len_drop_datalist_param = 3;

$("#search-input").keyup(function () {
  if ($(this).val().length >= search_len_drop_datalist_param) {
    // Enable
    $("datalist#search-datalist-disable").attr("id", "search-datalist-enabled");
  } else {
    // Disable
    $("datalist#search-datalist-disable").attr("id", "search-datalist-disable");
  }
});
