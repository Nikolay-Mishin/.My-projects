
document.addEventListener('DOMContentLoaded', function() {
    part2();
});

function part2() {
    // с 26 по 28 (включительно) июня 2015 года
    var startDate  = new Date(2015, 5, 26);
    var finishDate = new Date(2015, 5, 29);

    var total = 0;
    var count = 0;
    var customers = [];
    var recommended = 0;

    ordersList.forEach(function (order) {
        var date = new Date(order.timestamp * 1000);
        if (startDate <= date && date < finishDate) {
            total += order.total;
            count += 1;
            if (customers.indexOf(order.user_id) == -1) {
                customers.push(order.user_id);
            }
            if (order.recommended > 0) {
                recommended += 1;
            }
        }
    });

    setValue('.tab2 .total',        total + ' руб.');
    setValue('.tab2 .count',        count);
    setValue('.tab2 .customers',    customers.length);
    setValue('.tab2 .recommended',  recommended);
}

function setValue(selector, value) {
    document.querySelector(selector).innerText = value;
}
