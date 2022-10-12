
document.addEventListener('DOMContentLoaded', main);

function main() {
    table1(ordersList);
    table2(ordersList);
    table3(ordersList);
}

function $(selector) {
    return document.querySelector(selector);
}

function table1(ordersList) {
    $('#total-orders').innerText = ordersList.length;

    var sum = 0;
    var rec = 0;
    var notRecCount = 0;
    ordersList.forEach(function (order) {
        sum += order.total;
        rec += order.recommended;
        if (order.recommended === 0) {
            notRecCount += 1;
        }
    });
    $('#total-sum').innerText = sum + ' руб.';
    $('#total-recommended').innerText = rec + ' руб.';
    $('#total-without-recommended').innerText = notRecCount;

    var users = [];
    ordersList.forEach(function (order) {
        if (users.indexOf(order.user_id) !== -1) {
            users.push(order.user_id);
        }
    });
    $('#total-customers').innerText = users.length;
}

function table2(ordersList) {
    // var select = [];
    // ordersList.forEach(function(order) {
    //     var d26 = new Date(2015, 5, 26).getTime() / 1000;
    //     var d29 = new Date(2015, 5, 29).getTime() / 1000;
    //     if (d26 <= order.timestamp && order.timestamp < d29) {
    //         select.push(order);
    //     }
    // });

    // var d26 = new Date(2015, 5, 26);
    // var d29 = new Date(2015, 5, 29);
    // var select = [];
    // ordersList.forEach(function(order) {
    //     var d = new Date(order.timestamp * 1000);
    //     if (d26 <= d && d < d29) {
    //         select.push(order);
    //     }
    // });

    var d26 = new Date("2015-06-26");
    var d29 = new Date(2015, 5, 29);
    var select = ordersList.filter(function(order) {
        var d = new Date(order.timestamp * 1000);
        return (d26 <= d && d < d29);
    });

    var sum = 0;
    select.forEach(function(order) {
        sum += order.total;
    });
    $('#total-26-28').innerText = sum;
    $('#count-26-28').innerText = select.length;

}

function table3(ordersList) {
    ordersList.sort(function(a, b) {
       return b.total - a.total;
    });
    var top10 = [];
    for (var i = 0; i < 10; i += 1) {
        top10.push(ordersList[i]);
    }
    var top10 = ordersList.slice(0, 9);
    var tbody = $('#t3 tbody');
    tbody.innerHTML = '';
    top10.forEach(function(order) {
       tbody.innerHTML += '<tr>' +
           '<td>' + (new Date(order.timestamp * 1000).toDateString()) +
           '<td>' + order.id +
           '<td>' + order.user_id +
           '<td>' + order.total + ' руб.' +
           '<td>' + order.typical + ' руб.' +
           '<td>' + order.recommended + ' руб.' +
       '</tr>';
    });
}


function table4(ordersList) {
    var users = [];
    ordersList.forEach(function (order) {
        if (users.indexOf(order.user_id) !== -1) {
            users.push(order.user_id);
        }
    });

    var tbody = $('#t4 tbody');
    tbody.innerHTML = '';
    users.forEach(function(user) {
        var userOrders = ordersList.filter(function(order) {
            return order.user_id == user;
        });
        if (userOrders.length > 1) {
            tbody.innerHTML += '<tr>' +
                '<td>' + user +
                '<td>' + userOrders.length +
            '</tr>'
        }
    });
}


function table5(ordersList) {
    var user = $('#user').value;
    var userOrders = ordersList.filter(function(order) {
        return order.user_id == user;
    });
    var tbody = $('#t5 tbody');
    tbody.innerHTML = '';
    userOrders.forEach(function(order) {
        tbody.innerHTML += '<tr>' +
            '<td>' + (new Date(order.timestamp * 1000).toDateString()) +
            '<td>' + order.id +
            '<td>' + order.total + ' руб.' +
            '<td>' + order.typical + ' руб.' +
            '<td>' + order.recommended + ' руб.' +
        '</tr>'
    });
}


function tableA(ordersList) {
    var sum = 0;
    var d24 = new Date('2015-06-24');
    var d25 = new Date('2015-06-25');
    var selectOrders = [];
    for (var i = 0; i < ordersList.length; i += 1) {
        var order = ordersList[i];
        sum += order.total;
        var d = new Date(order.timestamp * 1000);
        if (d24 < d && d < d25) {
            selectOrders.push(order);
        }
    }

    ordersList.forEach(function(order) {
        sum += order.total;
        var d = new Date(order.timestamp * 1000);
        if (d24 < d && d < d25) {
            selectOrders.push(order);
        }
    });

    var selectOrders = ordersList.filter(function(order) {
        var d = new Date(order.timestamp * 1000);
        return d24 < d && d < d25
    });

}
