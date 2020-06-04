$(function () {

    $('.reviews__tab').on('click' ,function(event) {
        var id = $(this).attr('data-id');
        $('.reviews__inner').find('.reviews__content-item').removeClass('active-tab').hide();
        $('.reviews__tabs').find('.reviews__tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });


});