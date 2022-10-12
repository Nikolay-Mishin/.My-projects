
document.addEventListener('DOMContentLoaded', function() {
    part3(ordersList);
});

function part3(ordersList) {
    var top10 = ordersList.sort(function(a, b) {
        return a.total - b.total;
    }).slice(-5).reverse();

    var tbody = document.querySelector('.tab3 tbody');
    top10.forEach(function(order) {
        var tr = document.createElement('tr');
        tr.appendChild(document.createElement('td')).appendChild(document.createTextNode(new Date(order.timestamp * 1000).toLocaleDateString()));
        tr.appendChild(document.createElement('td')).appendChild(document.createTextNode(order.id));
        tr.appendChild(document.createElement('td')).appendChild(document.createTextNode(order.user_id));
        tr.appendChild(document.createElement('td')).appendChild(document.createTextNode(order.total + ' руб.'));
        tr.appendChild(document.createElement('td')).appendChild(document.createTextNode(order.typical + ' руб.'));
        tr.appendChild(document.createElement('td')).appendChild(document.createTextNode(order.recommended + ' руб.'));
        tbody.appendChild(tr);
    });
}
