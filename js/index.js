(function($){
    $.fn.app = function()
    {
        var token = '';
        if(user){
            token = user.token;
        }
        var primus = Primus.connect('ws://mygametests.info/?token=' + token);
    };


    $(document).ready(function()
    {
        var app =  new $.fn.app();

    });
})(jQuery);