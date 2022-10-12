
document.addEventListener('DOMContentLoaded', function() {
    part3();
});

function part3() {
    var sortedList = ordersList.sort(function(a, b) {
        return a.total - b.total;
    });

    var tbody = document.querySelector('.tab3 tbody');
    tbody.innerHTML = '';

    sortedList = sortedList.reverse();
    for (var i = 0; i < 5; i += 1) {
        var order = sortedList[i];

        var tr = '<tr>';
        tr += '<td>' + new Date(order.timestamp * 1000).toLocaleDateString();
        tr += '<td>' + order.id;
        tr += '<td>' + order.user_id;
        tr += '<td>' + order.total + ' руб.';
        tr += '<td>' + order.typical + ' руб.';
        tr += '<td>' + order.recommended + ' руб.';
        tbody.innerHTML += tr;
    }
}
