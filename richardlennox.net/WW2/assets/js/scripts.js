


/*
    Show latest tweet
*/
jQuery(function($) {
    $(".show-tweets").tweet({
        username: "richardlennox",
        join_text: "auto",
        count: 1,
        loading_text: "loading tweet...",
        template: "{time} {text}"
    });
});


/*
    Flickr photos
*/
$(document).ready(function() {
    $('.flickr-feed').jflickrfeed({
        limit: 16,
        qstrings: {
            id: '52617155@N08'
        },
        itemTemplate: '<li><a href="{{link}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    });
});


/*
    Subscription form
*/
jQuery(document).ready(function() {

    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscription-form form').submit(function() {
        var postdata = $('.subscription-form form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.progress').css('margin', '10px 0 0 0');
                    $('.error-message').fadeIn();
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscription-form form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn();
                }
            }
        });
        return false;
    });
});

$(function () {
    $('a[href^="mailto:"]').each(function () {
        this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
    });
});