$(document).ready(function () {
    $('img[usemap]').rwdImageMaps();
    $('.oreo').removeClass('hidden');
})

function dunk() {
    $('.oreo').toggleClass('dunked')
}