
$(function() {
    $('#show-orders').on('click', part5);
});

function part5() {
    var tbody = $('.tab5 tbody');

    var id = $('#user-id').val();
    if (isNaN(Number(id))) {
        $('#warning').text('ВВЕДИТЕ ЧИСЛО');
        tbody.empty();
    }
    else {
        $('#warning').empty();
        tbody.empty();
        ordersList.forEach(function(order) {
            if (order.user_id == id)
                $('<tr>')
                    .append($('<td>').text(new Date(order.timestamp * 1000).toLocaleDateString()))
                    .append($('<td>').text(order.id))
                    .append($('<td>').text(order.total + ' руб.'))
                    .append($('<td>').text(order.typical + ' руб.'))
                    .append($('<td>').text(order.recommended + ' руб.'))
                    .appendTo(tbody);
        });
    }
}
