$(document).ready(function () {
    $("#dropdownButton").click(function (event) {
        $("#logoutButton").toggleClass("hidden");
        event.stopPropagation(); // Prevent click from propagating to document
    });

    $(document).click(function () {
        $("#logoutButton").addClass("hidden");
    });

    $("#logoutButton").click(function (event) {
        event.stopPropagation(); // Prevent menu click from closing it
    });
});