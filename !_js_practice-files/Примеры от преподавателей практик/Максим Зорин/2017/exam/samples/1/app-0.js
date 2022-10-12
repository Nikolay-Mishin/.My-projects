
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

    for (var i = 0; i < ordersList.length; i += 1) {
        var order = ordersList[i];

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
    }

    document.getElementById('total-sum').innerHTML          = total + ' руб.';
    document.getElementById('total-orders').innerHTML       = ordersList.length;
    document.getElementById('total-recommended').innerHTML  = totalRecommended + ' руб.';
    document.getElementById('total-typical').innerHTML      = totalTypical + ' руб.';
    document.getElementById('total-customers').innerHTML    = customers.length;
    document.getElementById('total-without-recommended').innerHTML = onlyTypical;
    document.getElementById('total-without-typical').innerHTML     = onlyRecommended;
}
