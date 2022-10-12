
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('show-orders').addEventListener('click', part5);
});

function part5() {
    var tbody = document.querySelector('.tab5 tbody');
    tbody.innerHTML = '';

    var warningBox = document.getElementById('warning');
    warningBox.innerHTML = '';

    var userInput = document.getElementById('user-id');
    var id = userInput.value;

    if (isNaN(Number(id))) {
        warningBox.innerHTML = 'ВВЕДИТЕ ЧИСЛО';
    }
    else {
        var res = '';
        ordersList.filter(function(order) {
            return (order.user_id == id);
        }).forEach(function(order) {
            res += '<tr>' +
                '<td>' + new Date(order.timestamp * 1000).toLocaleDateString()  +
                '<td>' + order.id +
                '<td>' + order.total + ' руб.' +
                '<td>' + order.typical + ' руб.' +
                '<td>' + order.recommended + ' руб.';
        });
        tbody.innerHTML = res;
    }
}
