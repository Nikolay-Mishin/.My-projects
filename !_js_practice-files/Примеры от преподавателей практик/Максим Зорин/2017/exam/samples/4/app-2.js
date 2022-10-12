
document.addEventListener('DOMContentLoaded', function() {
    part4();
});

function part4() {
    var users = {};
    ordersList.forEach(function(order) {
        if (!users[order.user_id])
            users[order.user_id] = {id: order.user_id, orders: []};
        users[order.user_id].orders.push(order);
    });

    var tbody = document.querySelector('.tab4 tbody');
    tbody.innerHTML = '';
    Object.values(users).forEach(function(user) {
        if (user.orders.length > 10) {
            var tr = '<tr>';
            tr += '<td>' + user.id;
            tr += '<td>' + user.orders.length;
            tbody.innerHTML += tr;
        }
    });
}
