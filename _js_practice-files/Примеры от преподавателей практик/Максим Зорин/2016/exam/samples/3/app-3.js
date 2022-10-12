
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
        [
            new Date(order.timestamp * 1000).toLocaleDateString(),
            order.id,
            order.user_id,
            order.total + ' руб.',
            order.typical + ' руб.',
            order.recommended + ' руб.'
        ].forEach(function(cell) {
            tr.appendChild(document.createElement('td'))
              .appendChild(document.createTextNode(cell));
        });
        tbody.appendChild(tr);
    });
}
