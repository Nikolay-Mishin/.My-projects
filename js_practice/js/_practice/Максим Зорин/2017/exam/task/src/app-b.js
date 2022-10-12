var total_info = {};

function log (id) {return '\n' + `===== | ~ Билет ${id} ~ | =====` + '\n' + '\n';}

document.addEventListener ('DOMContentLoaded', function () {
    let data = [];

    for (let order of ordersList)
        data[ordersList.indexOf (order)] = order;

    table1 (data);
    table2 (data);
    table3 (data);
    table4 (data);

    document.getElementById ('userFilter').addEventListener ('click', () => table5 (data));
    
    b_1 (data, 1);
    b_2 (data, 2);
    b_3 (data, 3);
    b_4 (data, 4);
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
    let Recommends = orders.filter (order => order.recommended > 0);

    document.querySelector ('#total-without-recommended').textContent = withoutRecommends.length;
    document.querySelector ('#total-without-typical').textContent = Recommends.length;
}

function table2 (orders) {
    const first = new Date (2015, 5, 26);
    const last = new Date (2015, 5, 29);

    let time = time_filter (orders, first, last);

    let sum = 0;
    for (let order of time) {
        sum += order.total;
    }

    document.querySelector ('#count').textContent = (sum / 100).toFixed (2) + ' руб.';
    document.querySelector ('#customers').textContent = time.length;
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

    console.log (permanentUsers.length, permanentUsers);
}

function table5 (orders) {
    let userId = Number (document.querySelector ('#user-id').value);
    // == пытается привет к единому наименьшему типу
    // === сравнивает строго по типам
    let userOrders = orders.filter (order => order.user_id === userId);

    console.log ('Список заказов');
    console.log (userOrders);
}

// ===== /---/ =====

function output (element, value, after) {
    if (after == undefined) after = '';
    document.querySelector ('#' + element).textContent = value + after;
    total_info [element] = value;
}

function Max (elements, id) {
    let max = [];
    max = elements.sort ((b, a) => a [id] - b [id]);
    return max[0];
}

function Min (elements, id) {
    let min = [];
    min = elements.sort ((a, b) => a [id] - b [id]);
    return min[0];
}

function max_price (info, id) {
    id.innerHTML = 
        'date: ' + info[0] + '<br>' + '<br>' + 
        'id: ' + info[1] + '<br>' + 
        'user id: ' + info[2] + '<br>' + 
        'timestamp: ' + info[3] + '<br>' + 
        'total: ' + (info[4] / 100).toFixed (2) + ' руб.' + '<br>' + 
        'recommended: ' + info[5] + '<br>' + 
        'typical: ' + (info[6] / 100).toFixed (2) + ' руб.'
    ;
}

function time_filter (orders, first, last) {
    let subOrders = [];

    if (last == undefined)
        last = Max (orders, 'timestamp').timestamp;
    if (last == '') {
        last = new Date (first);
        last.setDate (first.getDate () + 1);
    }

    if (typeof (last) == 'number')
        last = get_date (last);
    console.log (first + '\n' + last);

    for (let order of orders) {
        let ts = order.timestamp * 1000;
        if (first.getTime() <= ts && ts < last.getTime())
            subOrders.push (order);
    }

    console.log (subOrders);

    return subOrders;
}

function get_date (time) {
    let date = new Date;
    date.setTime (time * 1000);
    return date;
}

// ===== /---/ =====

function b_1 (orders, id) {
    console.log (log (id));

    let user_id = document.querySelector ('#user_id');
        user_id.innerHTML = '';
    let users_id = '';
    let total_orders = orders.length;
    let sum = 0;
    let recomsum = 0;
    let max = 0;
    let i = 0;
    let date = new Date;
    let info = [];
    let max_prices = document.getElementsByClassName ('max_price');

    for (let order of orders) {
        users_id += order.user_id + '\n';
        sum += order.total / 100;
        recomsum += order.recommended / 100;
    }

    max = Max (orders, 'total');
    console.log (max);

    date = get_date (max.timestamp);
    sum = sum.toFixed (2);
    recomsum = recomsum.toFixed (2);
    
    output ('user_id', users_id);
    output ('total_sum', sum, ' руб.');
    output ('total_orders', total_orders);
    output ('total_recommended', recomsum, ' руб.');
    total_info.max_price = (max.total / 100).toFixed (2);
    console.log (total_info);

    info = [date, max.id, max.user_id, max.timestamp, max.total, max.recommended, max.typical];
    console.log (info);
    console.log (max_prices);

    for (let element of max_prices) {
        max_price (info, element);
        console.log (element);
    }
}

function b_2 (orders, id) {
    console.log (log (id));

    let date_first = get_date (Min (orders, 'timestamp').timestamp);
    let date_last = get_date (Max (orders, 'timestamp').timestamp);
    total_info.date_first = date_first;
    total_info.date_last = date_last;

    let Recommends = orders.filter (order => order.recommended > 0);

    let recommended_value = Recommends.length;
    let total_date = new Date (2015, 5, 28);
    let total_average = (total_info.total_recommended / Recommends.length).toFixed (2);

    let time = time_filter (orders, total_date, '');

    let sum = 0;
    for (let order of time) {
        sum += order.total;
    }

    output ('recommended_value', recommended_value);
    output ('total_date', (sum / 100).toFixed (2), ' руб.');
    output ('total_average', total_average, ' руб.');
}

function b_3 (orders, id) {
    console.log (log (id));

    let withoutRecommends = orders.filter (order => order.recommended === 0);
    let Recommends = orders.filter (order => order.recommended > 0);

    let non_recommended_value = withoutRecommends.length;
    let total_date_2 = new Date (2015, 5, 24);
    let total_users_recommended = total_info.recommended_value;
    let max_price_recommended = '';

    let time = time_filter (orders, total_date_2);

    let sum = 0;
    for (let order of time) {
        sum += order.total;
    }

    max_price_recommended = (Max (Recommends, 'total').total / 100).toFixed (2);

    output ('non-recommended_value', non_recommended_value);
    output ('total_date-2', (sum / 100).toFixed (2), ' руб.');
    output ('total_users-recommended', total_users_recommended);
    output ('max_price-recommended', max_price_recommended, ' руб.');
}

function b_4 (orders, id) {
    console.log (log (id));

    let Recommends = orders.filter (order => order.recommended > 0);
    let withoutTypical = Recommends.filter (order => order.typical === 0);

    let total_recommended_4 = withoutTypical.length;
    let total_date_4 = new Date (2015, 5, 24);

    let time = time_filter (orders, total_date_4, '');

    let sum = 0;
    for (let order of time) {
        sum += order.total;
    }

    let max_price_date = (Max (time, 'total').total / 100).toFixed (2);

    output ('total_recommended-4', total_recommended_4);
    output ('users-total_recommended-4', time.length);
    output ('total_date-4', (sum / 100).toFixed (2), ' руб.');
    output ('max_price-date', max_price_date, ' руб.');
}
