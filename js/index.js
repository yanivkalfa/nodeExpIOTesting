(function($){
    $.fn.app = function()
    {
        var primus = Primus.connect('ws://mygametests.info/');
    };


    $(document).ready(function()
    {
        var app =  new $.fn.app();

    });
})(jQuery);