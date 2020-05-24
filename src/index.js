import $ from 'jQuery';
$(document).ready(function() {

    $('#next').click(function(e) {
        var slider = $('.slider');
        var activeSlide = $('.active');
        var nextSlides = activeSlide.nextAll();
       ;
        if (nextSlides.length <= 2) {
            slider.children('.slide').first().appendTo(slider);
        }
        var nextSlide = activeSlide.next()
        activeSlide.removeClass('active');
        nextSlide.addClass('active');

    })

    $('#prev').click(function(e) {
        var slider = $('.slider');
        var activeSlide = $('.active');
        var prevSlides = activeSlide.prevAll();

        if (prevSlides.length <= 2) {
            slider.children('.slide').last().prependTo(slider);
        } var prevSlide = activeSlide.prev();
        activeSlide.removeClass('active');
        prevSlide.addClass('active');
    })

});