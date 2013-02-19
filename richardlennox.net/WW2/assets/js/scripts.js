
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




$(function () {
    $('a[href^="mailto:"]').each(function () {
        this.href = this.href.replace('{(at)}', '@').replace(/{\(dot\)}/g, '.');
    });
});