
            $(function () {
             $('.list__text .list__text-item, .reviews__tabs .reviews__tab').on('click', function () {

                 let id = $(this).attr('data-id');

                 $('.list__content, .reviews__container-text').find('.list-item, .reviews__content-item').removeClass('active-list', 'active-tab').hide();
                 $('.list__text .tabs, .reviews__content').find('.list__text-item, .reviews__tab').removeClass('active');

                 $(this).addClass('active');
                 $('#'+id).addClass('active-list','active-tab').fadeIn();

                 return false;


             });


                new WOW().init();

            });

