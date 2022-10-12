$(".btn").click(function () {
    var $s = $("#s");
    var $q = $("#q");
    $s.text(parseFloat($s.text()) + parseFloat($(this).data("price")));
    $q.text(parseInt($q.text()) + 1);
});