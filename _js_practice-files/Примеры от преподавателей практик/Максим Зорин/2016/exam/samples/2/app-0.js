
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

    for (var i = 0; i < ordersList.length; i += 1) {
        var order = ordersList[i];

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
    }

    document.querySelector('.tab2 .total').innerText        = total + ' руб.';
    document.querySelector('.tab2 .count').innerText        = count;
    document.querySelector('.tab2 .customers').innerText    = customers.length;
    document.querySelector('.tab2 .recommended').innerText  = recommended;
}
