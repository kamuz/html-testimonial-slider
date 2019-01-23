jQuery(document).ready(function($) {
    $('.membership-include').owlCarousel({
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        animateOut: 'fadeOut',
        navText: ['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
        onInitialized: counter,
        onTranslated: counter
    });

    function counter(event) {
        var element = event.target;
        var items = event.item.count;
        var item = event.item.index + 1;
        $('#counter').html(item + " / " + items)
    }
});