var galeria = [
    { foto: './image/foto-01.jpg' },
    { foto: './image/foto-02.jpg' }
];

var swiperContainer = $('.swiper-container');
var album = $('<div class="swiper-wrapper"></div>');

if (galeria) {
    swiperContainer.html(album)
    for (var i = 0; i < galeria.length; i++) {
        $(album).append($('<div class="swiper-slide"><img class="foto" src="' + galeria[i].foto + '"></div>'));
    }
}

// Start Slider
var swiper = new Swiper('.swiper-container', {
    speed: 2000,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 10000,
    },
});
