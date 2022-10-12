
document.addEventListener('DOMContentLoaded', function() {
    part1();
});

function part1() {
    var total = 0;
    var totalRecommended = 0;
    var totalTypical = 0;
    var onlyTypical = 0;
    var onlyRecommended = 0;
    var customers = [];

    ordersList.forEach(function(order) {
        total += order.total;
        totalRecommended += order.recommended;
        totalTypical += order.typical;

        if (customers.indexOf(order.user_id) == -1) {
            customers.push(order.user_id);
        }

        if (order.recommended == 0) {
            onlyTypical += 1;
        }

        if (order.typical == 0) {
            onlyRecommended += 1;
        }
    });

    setValue('#total-sum',         total + ' руб.');
    setValue('#total-orders',      ordersList.length);
    setValue('#total-recommended', totalRecommended + ' руб.');
    setValue('#total-typical',     totalTypical + ' руб.');
    setValue('#total-customers',   customers.length);
    setValue('#total-without-recommended', onlyTypical);
    setValue('#total-without-typical',     onlyRecommended);
}

function setValue(selector, value) {
    document.querySelector(selector).innerText = value;
}
