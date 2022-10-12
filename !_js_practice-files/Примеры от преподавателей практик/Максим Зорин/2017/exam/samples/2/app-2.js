
document.addEventListener('DOMContentLoaded', function() {
    // с 26 по 28 (включительно) июня 2015 года
    part2(ordersList, new Date(2015, 5, 26), new Date(2015, 5, 29));
});

function part2(ordersList, startDate, finishDate) {
    var total = 0,
        count = 0,
        customers = [],
        recommended = 0;

    ordersList.filter(function(order) {
        var date = new Date(order.timestamp * 1000);
        return (startDate <= date && date < finishDate);
    }).forEach(function(order) {
        total += order.total;
        count += 1;
        if (customers.indexOf(order.user_id) == -1)
            customers.push(order.user_id);
        if (order.recommended > 0)
            recommended += 1;
    });

    [
        ['.tab2 .total',        total + ' руб.'],
        ['.tab2 .count',        count],
        ['.tab2 .customers',    customers.length],
        ['.tab2 .recommended',  recommended]
    ].forEach(function(field) {
        document.querySelector(field[0]).innerText = field[1];
    });
}
