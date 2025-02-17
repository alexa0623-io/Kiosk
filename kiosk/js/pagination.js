$(document).ready(function () {
    let cardsPerPage = 8, currentPage = 1;
    let $cards = $(".grid > div"), totalPages = Math.ceil($cards.length / cardsPerPage);

    function showPage(page) {
        $cards.hide().slice((page - 1) * cardsPerPage, page * cardsPerPage).show();
    }

    $(".next").click(() => { if (currentPage < totalPages) showPage(++currentPage); });
    $(".prev").click(() => { if (currentPage > 1) showPage(--currentPage); });

    showPage(currentPage);
});
