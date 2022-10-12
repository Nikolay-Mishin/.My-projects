
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

    var userList = Object.values(users).filter(function(user) {
        return (user.orders.length > 10);
    });

    var tbody = document.querySelector('.tab4 tbody');
    tbody.innerHTML = userList.reduce(function(res, user) {
        return res + ('<tr><td>' + user.id + '<td>' + user.orders.length);
    }, '');
}
