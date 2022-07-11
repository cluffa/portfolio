function display(id, url) {
    // iwfdash https://cluffa.shinyapps.io/IWF-Data-Explorer/
    // wldash https://cluffa.shinyapps.io/Weight-Loss-Trends/
    document.getElementById(id).innerHTML = "<div class=\"dash_wrapper\"><iframe src=\"" +
        url + "\" frameborder=\"0\" width=\"100%\"height=\"100%\"></iframe></div>";
}

function hide(id) {
    document.getElementById(id).innerHTML = "";
}