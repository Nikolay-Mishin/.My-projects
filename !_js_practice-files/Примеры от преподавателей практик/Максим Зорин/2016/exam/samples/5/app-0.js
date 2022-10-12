
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
        for (var i = 0; i < ordersList.length; i += 1) {
            var order = ordersList[i];

            if (order.user_id == id) {
                var tr = '<tr>';
                tr += '<td>' + new Date(order.timestamp * 1000).toLocaleDateString();
                tr += '<td>' + order.id;
                tr += '<td>' + order.total + ' руб.';
                tr += '<td>' + order.typical + ' руб.';
                tr += '<td>' + order.recommended + ' руб.';
                tbody.innerHTML += tr;
            }
        }
    }
}
