$(document).ready(function() {
    // Logout Modal
    $('#logoutButton').click(function() {
        $('#logoutModal').removeClass('hidden');
    });
    $('#cancelLogout, #confirmLogout').click(function() {
        $('#logoutModal').addClass('hidden');
    });
    
    // Plus Modal
    $('#plusButton').click(function() {
        $('#plusModal').removeClass('hidden');
    });
    $('#cancelPlus, #confirmPlus').click(function() {
        $('#plusModal').addClass('hidden');
    });
    
    // Cart Modal
    $('#cartButton').click(function() {
        $('#cartModal').removeClass('hidden');
    });
    $('#cancelCart, #confirmCart').click(function() {
        $('#cartModal').addClass('hidden');
    });
});