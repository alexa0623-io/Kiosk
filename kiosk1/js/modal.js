$(document).ready(function () {
    $("#dropdownButton").click(function (event) {
        $("#dropdownMenu").toggleClass("hidden");
        event.stopPropagation(); // Prevent click from propagating to document
    });

    $(document).click(function () {
        $("#dropdownMenu").addClass("hidden");
    });

    $("#dropdownMenu").click(function (event) {
        event.stopPropagation(); // Prevent menu click from closing it
    });
});