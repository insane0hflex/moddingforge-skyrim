// write last modified date to the lastUpdated class (in the footer tag at bottom of page)
$(document).ready(function () {
    $(".lastUpdated").text("Last Updated: " + document.lastModified.substring(0, 10));
});
