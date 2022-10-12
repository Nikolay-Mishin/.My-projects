
document.addEventListener('DOMContentLoaded', function() {
    part3();
});

function part3() {
    var top10 = ordersList.sort(function(a, b) {
        return a.total - b.total;
    }).slice(-5).reverse();

    var res = '';
    top10.forEach(function(order) {
        var tr = '<tr>';
        tr += '<td>' + new Date(order.timestamp * 1000).toLocaleDateString();
        tr += '<td>' + order.id;
        tr += '<td>' + order.user_id;
        tr += '<td>' + order.total + ' руб.';
        tr += '<td>' + order.typical + ' руб.';
        tr += '<td>' + order.recommended + ' руб.';
        res += tr;
    });
    document.querySelector('.tab3 tbody').innerHTML = res;
}
