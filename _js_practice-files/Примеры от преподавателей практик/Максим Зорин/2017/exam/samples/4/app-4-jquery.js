
$(part4);

function part4() {
    var users = {};
    ordersList.forEach(function(order) {
        if (!users[order.user_id])
            users[order.user_id] = {id: order.user_id, orders: []};
        users[order.user_id].orders.push(order);
    });

    var userList = $.map(users, function(user) {
        return user;
    }).filter(function(user) {
        return user.orders.length > 10
    });

    var tbody = $('.tab4 tbody');
    tbody.empty();
    userList.forEach(function(user) {
        $('<tr>')
            .append($('<td>').text(user.id))
            .append($('<td>').text(user.orders.length))
            .appendTo(tbody);
    });
}
