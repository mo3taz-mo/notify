/*global $  */

var main = function () {
    "use strict";
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 6,
        center: false,
        autoWidth: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
};

$(document).ready(main);