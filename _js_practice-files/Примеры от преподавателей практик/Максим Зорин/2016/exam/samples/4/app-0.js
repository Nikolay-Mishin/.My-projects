
document.addEventListener('DOMContentLoaded', function() {
    part4();
});

function part4() {
    var userList = [];
    // создаем заказчиков
    for (var i = 0; i < ordersList.length; i += 1) {
        var order = ordersList[i];

        // ищем order.user_id в имеющихся заказчиках
        var user = null;
        for (var j = 0; j < userList.length; j += 1) {
            if (order.user_id == userList[j].id) {
                user = userList[j];
                break;
            }
        }

        // если не нашли, создаем новый и добавляем его в массив
        if (!user) {
            user = {
                id: order.user_id,
                orders: []
            };
            userList.push(user);
        }

        // добавляем текущий заказ в список заказов найденного заказчика
        user.orders.push(order);
    }

    var tbody = document.querySelector('.tab4 tbody');
    tbody.innerHTML = '';
    for (var i = 0; i < userList.length; i += 1) {
        var user = userList[i];
        if (user.orders.length > 10) {
            var tr = '<tr>';
            tr += '<td>' + user.id;
            tr += '<td>' + user.orders.length;
            tbody.innerHTML += tr;
        }
    }
}
