
            $(function () {
             $('.list__text .list__text-item').on('click', function () {

                 let id = $(this).attr('data-id');

                 $('.list__content').find('.list-item').removeClass('active-list').hide();
                 $('.list__text .tabs').find('.list__text-item').removeClass('active');

                 $(this).addClass('active');
                 $('#'+id).addClass('active-list').fadeIn();

                 return false;


             });


            });