document.addEventListener ('DOMContentLoaded', function () {
    part1 (ordersList);
    // с 26 по 28 (включительно) июня 2015 года
    part2 (ordersList, new Date (2015, 5, 26), new Date (2015, 5, 29));
    part3 (ordersList);
    part4 ();
    document.getElementById ('show-orders').addEventListener ('click', part5);
});

function part1 (ordersList) {
    var total = 0,
        totalRecommended = 0,
        totalTypical = 0,
        onlyTypical = 0,
        onlyRecommended = 0,
        customers = [];

    ordersList.forEach (function (order) {
        total += order.total;
        totalRecommended += order.recommended;
        totalTypical += order.typical;

        if (customers.indexOf (order.user_id) == -1)
            customers.push (order.user_id);

        if (order.recommended == 0)
            onlyTypical += 1;

        if (order.typical == 0)
            onlyRecommended += 1;
    });

    [
        ['total-sum',         total + ' руб.'],
        ['total-orders',      ordersList.length],
        ['total-recommended', totalRecommended + ' руб.'],
        ['total-typical',     totalTypical + ' руб.'],
        ['total-customers',   customers.length],
        ['total-without-recommended', onlyTypical],
        ['total-without-typical',     onlyRecommended]
    ].forEach (function (field) {
        document.getElementById (field[0]).innerText = field[1];
    })
}

function part2 (ordersList, startDate, finishDate) {
    var total = 0,
        count = 0,
        customers = [],
        recommended = 0;

    ordersList.filter (function (order) {
        var date = new Date (order.timestamp * 1000);
        return (startDate <= date && date < finishDate);
    }).forEach (function (order) {
        total += order.total;
        count += 1;
        if (customers.indexOf (order.user_id) == -1)
            customers.push (order.user_id);
        if (order.recommended > 0)
            recommended += 1;
    });

    [
        ['.tab2 .total',        total + ' руб.'],
        ['.tab2 .count',        count],
        ['.tab2 .customers',    customers.length],
        ['.tab2 .recommended',  recommended]
    ].forEach (function (field) {
        document.querySelector (field[0]).innerText = field[1];
    });
}

function part3 (ordersList) {
    var top10 = ordersList.sort (function (a, b) {
        return a.total - b.total;
    }).slice (-5).reverse();

    var tbody = document.querySelector ('.tab3 tbody');
    top10.forEach (function (order) {
        var tr = document.createElement ('tr');
        [
            new Date (order.timestamp * 1000).toLocaleDateString(),
            order.id,
            order.user_id,
            order.total + ' руб.',
            order.typical + ' руб.',
            order.recommended + ' руб.'
        ].forEach (function (cell) {
            tr.appendChild (document.createElement ('td'))
              .appendChild (document.createTextNode (cell));
        });
        tbody.appendChild (tr);
    });
}

function part4 () {
    var users = {};
    ordersList.forEach (function (order) {
        if (!users[order.user_id])
            users[order.user_id] = {id: order.user_id, orders: []};
        users[order.user_id].orders.push (order);
    });

    var userList = Object.values (users).filter (function (user) {
        return (user.orders.length > 10);
    });

    var tbody = document.querySelector ('.tab4 tbody');
    tbody.innerHTML = userList.reduce (function (res, user) {
        return res + ('<tr><td>' + user.id + '<td>' + user.orders.length);
    }, '');
}

function part5 () {
    var tbody = document.querySelector ('.tab5 tbody');
    var warningBox = document.getElementById ('warning');
    var userInput = document.getElementById ('user-id');

    var id = userInput.value;
    if (isNaN (Number (id))) {
        warningBox.innerHTML = 'ВВЕДИТЕ ЧИСЛО';
        tbody.innerHTML = '';
    }
    else {
        warningBox.innerHTML = '';
        tbody.innerHTML = ordersList.filter (function (order) {
            return (order.user_id == id);
        }).reduce (function (res, order) {
            return res + '<tr>' +
                '<td>' + new Date (order.timestamp * 1000).toLocaleDateString() +
                '<td>' + order.id +
                '<td>' + order.total + ' руб.' +
                '<td>' + order.typical + ' руб.' +
                '<td>' + order.recommended + ' руб.';
        }, '');
    }
}
