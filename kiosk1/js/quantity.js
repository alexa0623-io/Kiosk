$(document).ready(function () {
    $(".plus-btn").click(function () {
        let quantityElement = $(this).siblings(".quantity");
        let currentQuantity = parseInt(quantityElement.text());
        quantityElement.text(currentQuantity + 1);
    });

    $(".minus-btn").click(function () {
        let quantityElement = $(this).siblings(".quantity");
        let currentQuantity = parseInt(quantityElement.text());
        if (currentQuantity > 1) {
            quantityElement.text(currentQuantity - 1);
        }
    });
});
