$(function() {
    function resize_content() {
        // 高さ取得
        var window_height = $(window).height();
        var head_height = $("#head").height();
        // CSS適応
        $("#concept").css("height", (window_height - head_height));
    }

    resize_content();

    $(window).on("resize", function(){
        resize_content();
    })
});