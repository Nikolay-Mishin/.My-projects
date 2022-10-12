
document.addEventListener('DOMContentLoaded', function() {
    part4();
});

function part4() {
    var users = {};
    // создаем заказчиков
    for (var i = 0; i < ordersList.length; i += 1) {
        var order = ordersList[i];
        users[order.user_id] = {
            id: order.user_id,
            orders: []
        }
    }
    // собираем заказы по заказчикам
    for (var i = 0; i < ordersList.length; i += 1) {
        var order = ordersList[i];
        users[order.user_id].orders.push(order);
    }

    var tbody = document.querySelector('.tab4 tbody');
    tbody.innerHTML = '';
    // перечисляем свойства
    for (var id in users) {
        var user = users[id];
        if (user.orders.length > 10) {
            var tr = '<tr>';
            tr += '<td>' + user.id;
            tr += '<td>' + user.orders.length;
            tbody.innerHTML += tr;
        }
    }
}
