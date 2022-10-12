
document.addEventListener('DOMContentLoaded', function() {
    part1(ordersList);
});

function part1(ordersList) {
    var total = 0,
        totalRecommended = 0,
        totalTypical = 0,
        onlyTypical = 0,
        onlyRecommended = 0,
        customers = [];

    ordersList.forEach(function(order) {
        total += order.total;
        totalRecommended += order.recommended;
        totalTypical += order.typical;

        if (customers.indexOf(order.user_id) == -1)
            customers.push(order.user_id);

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
    ].forEach(function(field) {
        document.getElementById(field[0]).innerText = field[1];
    })
}
