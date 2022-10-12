
$(part3);

function part3() {
    var top10 = ordersList.sort(function(a, b) {
        return a.total - b.total;
    }).slice(-5).reverse();

    var tbody = $('.tab3 tbody');
    tbody.empty();
    top10.forEach(function(order) {
        $('<tr>')
            .append($('<td>').text(new Date(order.timestamp * 1000).toLocaleDateString()))
            .append($('<td>').text(order.id))
            .append($('<td>').text(order.user_id))
            .append($('<td>').text(order.total))
            .append($('<td>').text(order.typical))
            .append($('<td>').text(order.recommended))
            .appendTo(tbody);
    });
}
