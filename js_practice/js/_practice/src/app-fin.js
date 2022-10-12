document.addEventListener ('DOMContentLoaded', function () {
    let data = ordersList;

    table1 (data);
    table2 (data);
    table3 (data);
    table4 (data);

    document.getElementById ('userFilter').addEventListener ('click', () => table5 (data));
});

function table1 (orders) {
    let sum = 0;
    let recomsum = 0;

    for (let order of orders) {
        sum += order.total / 100;
        recomsum += order.recommended / 100;
    }

    document.querySelector ('#total-sum').textContent = sum.toFixed (2) + ' руб.';
    document.querySelector ('#total-orders').textContent = orders.length;
    document.querySelector ('#total-recommended').textContent = recomsum.toFixed (2) + ' руб.';

    const users = [];

    for (let order of orders) {
        if (!users.includes (order.user_id))
            users.push (order.user_id);
    }

    document.querySelector ('#total-customers').textContent = users.length;

    let withoutRecommends = orders.filter (order => order.recommended === 0);
    document.querySelector ('#total-without-recommended').textContent = withoutRecommends.length;
}

function table2 (orders) {
    const d26 = new Date (2015, 5, 26);
    const d28 = new Date (2015, 5, 29);

    let subOrders = [];

    for (let order of orders) {
        let ts = order.timestamp * 1000;
        if (d26.getTime() <= ts && ts < d28.getTime())
            subOrders.push (order);
    }

    let sum = 0;
    for (let order of orders) {
        sum += order.total;
    }

    document.querySelector ('#count').textContent = (sum / 100).toFixed (2) + ' руб.';
    document.querySelector ('#customers').textContent = subOrders.length;
}

function table3 (orders) {
    /*
    // orders.sort ((a, b) => a.total - b.total).reverse();
    orders.sort ((b, a) => a.total - b.total);

    for (let i = 0; i < 5; i++)
        console.log (orders[i].total);
    */
    // срез части массива (начальный индекс, число элементов)
    for (let order of orders.sort ((b, a) => a.total - b.total).slice (0, 5))
        console.log (order);
}

function table4 (orders) {
    const usersDic = {};

    for (let order of orders) {
        // проверка существования имени свойства в объекте
        // usersDic.hasOwnProperty (order.user_id)
        if (!(order.user_id in usersDic))
            usersDic [order.user_id] = 0;

        usersDic [order.user_id]++;
    }

    const permanentUsers = [];

    for (let key of Object.keys (usersDic)) {
        let user_id = key;

        if (usersDic [user_id] > 1) {
            permanentUsers.push ({
                user_id: user_id,
                orders: usersDic [user_id]
            })
        }
    }

    console.log (permanentUsers.length, permanentUsers, Object.keys (usersDic).length, usersDic);
}

function table5 (orders) {
    let userId = Number (document.querySelector ('#user-id').value);
    // == пытается привет к единому наименьшему типу
    // === сравнивает строго по типам
    let userOrders = orders.filter (order => order.user_id === userId);

    console.log ('Список заказов');
    console.log (userOrders);
}
