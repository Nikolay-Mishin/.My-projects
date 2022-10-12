var total_info = {};

function log (id) {return '\n' + `===== | ~ Билет ${id} ~ | =====` + '\n' + '\n';}

document.addEventListener ('DOMContentLoaded', function () {
    let data = copy (ordersList);

    let date_first = get_date (Min (data, 'timestamp').timestamp);
    let date_last = get_date (Max (data, 'timestamp').timestamp);
    total_info.date_first = date_first;
    total_info.date_last = date_last;

    b_1 (data, 1);
    b_2 (data, 2);
    b_3 (data, 3);
    b_4 (data, 4);

    b_9 (data, 9);
    b_10 (data, 10);

    let thead = document.querySelectorAll ('#info thead th');
    for (let th of thead) {
        let filter = th.getAttribute [name];
        th.addEventListener ('click', () => filter_info (th, filter));
    }

    console.log ('DOMContentLoaded (total_info)' + '\n', total_info);
});

// ===== /---/ =====

function copy (elements) {
    let data = [];
    for (let element of elements)
        data [elements.indexOf (element)] = element;
    return data;
}

function numb (str) {
    return str.replace (/ /g, '');
}

function separator (n) {
    return n.toString ().replace (/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

function output (id, value, after) {
    if (after == undefined) after = '';
    document.getElementById (id).textContent = value + after;
    total_info [id] = numb (value);
}

function Max (orders, id) {
    let max = [];
    max = orders.sort ((b, a) => a [id] - b [id]);
    return max[0];
}

function Min (orders, id) {
    let min = [];
    min = orders.sort ((a, b) => a [id] - b [id]);
    return min[0];
}

function max_price (info, id) {
    id.innerHTML = 
        'date: ' + info[0] + '<br>' + '<br>' + 
        'id: ' + separator (info[1]) + '<br>' + 
        'user id: ' + separator (info[2]) + '<br>' + 
        'timestamp: ' + separator (info[3]) + '<br>' + 
        'total: ' + separator ((info[4] / 100).toFixed (2)) + ' руб.' + '<br>' + 
        'recommended: ' + separator (info[5]) + '<br>' + 
        'typical: ' + separator ((info[6] / 100).toFixed (2)) + ' руб.'
    ;
}

function time_filter (orders, first, last) {
    let subOrders = [];

    if (last == undefined)
        last = Max (orders, 'timestamp').timestamp + 1;
    if (last == '') {
        last = new Date (first);
        last.setDate (first.getDate () + 1);
    }

    if (typeof (last) == 'number')
        last = get_date (last);
    console.log ('time_filter ()' + '\n', first + '\n' + last);

    for (let order of orders) {
        let ts = order.timestamp * 1000;
        if (first.getTime() <= ts && ts < last.getTime())
            subOrders.push (order);
    }

    return subOrders;
}

function get_date (time) {
    let date = new Date;
    date.setTime (time * 1000);
    return date;
}

// ===== /---/ =====

function Info (id, list, filter) {
    let max = Max (list, filter);
    let max_price_date = (max.total / 100).toFixed (2);
    console.log ('Info ()' + '\n', separator (max_price_date), max);
    
    output (id, separator (max_price_date), ' руб.');
    
    date = get_date (max.timestamp);
    let info = [date, max.id, max.user_id, max.timestamp, max.total, max.recommended, max.typical];
    max_price (info, document.getElementById (id));

    return max;
}

function Date_list (id, orders, date) {
    console.log ('Date_list ()', date);
    let dates = time_filter (orders, date.first, date.last);

    let sum = 0;
    for (let order of dates) {
        sum += order.total;
    }

    output (id, separator ((sum / 100).toFixed (2)), ' руб.');

    return dates;
}

function Average (id, value, list) {
    let average = (value / list.length).toFixed (2);
    
    output (id, separator (average), ' руб.');
}

function user_list (orders, filter) {
    if (filter == 'permanent') filter = 1;
    else filter = 0;
    const usersDic = {};

    for (let order of orders) {
        if (!(order.user_id in usersDic))
            usersDic [order.user_id] = 0;

        usersDic [order.user_id]++;
    }

    const Users = [];

    for (let key of Object.keys (usersDic)) {
        let user_id = key;

        if (usersDic [user_id] > filter) {
            Users.push ({
                user_id: user_id,
                orders: usersDic [user_id]
            })
        }
    }

    console.log ('user_list ()' + '\n', Users);

    return Users;
}

// ===== /---/ =====

function b_1 (orders, id) {
    console.log (log (id));

    // 1-4 - идентификаторы | общая сумма заказов | общее число заказов | общая сумма рекомендованных продаж

    let user_id = document.querySelector ('#user_id');
        user_id.innerHTML = '';
    let users_id = '';
    let total_orders = orders.length;
    let sum = 0;
    let recomsum = 0;

    for (let order of orders) {
        users_id += order.user_id + '\n';
        sum += order.total / 100;
        recomsum += order.recommended / 100;
    }

    sum = sum.toFixed (2);
    recomsum = recomsum.toFixed (2);

    output ('user_id', users_id);
    output ('total_sum', separator (sum), ' руб.');
    output ('total_orders', separator (total_orders));
    output ('total_recommended', separator (recomsum), ' руб.');
    
    // 5 - информация о самом дорогом заказе

    Info ('max_price', orders, 'total');
}

function b_2 (orders, id) {
    console.log (log (id));

    // 1 - число заказов, в которых есть товары, купленные по рекомендации

    let Recommends = orders.filter (order => order.recommended > 0);
    let recommended_value = Recommends.length;

    output ('recommended_value', separator (recommended_value));

    // 2 - сумма заказов, сделанных 28 июня 2015

    let date = {first: new Date (2015, 5, 28), last: ''};
    let dates = Date_list ('total_date', orders, date);

    console.log ('b_2 ()' + '\n', dates);
    
    // 3 - средняя стоимость заказов, в которых есть товары, купленные по рекомендации

    let total_average = numb (total_info.total_recommended);

    Average ('total_average', total_average, Recommends);
    
    //output ('total_average', separator (total_average), ' руб.');

    // 4 - информация о самом дорогом заказе

    Info ('max_price-2', orders, 'total');
}

function b_3 (orders, id) {
    console.log (log (id));

    // 1 - число заказов, в которых нет товаров, купленных по рекомендации

    let withoutRecommends = orders.filter (order => order.recommended === 0);
    let non_recommended_value = withoutRecommends.length;

    output ('non-recommended_value', separator (non_recommended_value));

    // 2 - сумма заказов, сделанных, начиная с 24 июня 2015

    let date = {first: new Date (2015, 5, 24)};
    let dates = Date_list ('total_date-2', orders, date);

    console.log ('b_3 ()' + '\n', dates);

    // 3 - число покупателей, сделавших заказы по рекомендациям продавца

    let Recommends = orders.filter (order => order.recommended > 0);
    let total_users_recommended = user_list (Recommends).length;

    output ('total_users-recommended', separator (total_users_recommended));

    // 4 - информация о самом дорогом заказе из тех, в которых есть товары, купленные по рекомендации

    Info ('max_price-recommended', Recommends, 'total');

    let filter = total_info ['max_price-recommended'] * 100;
    let MaxOrders = Recommends.filter (order => order.recommended === filter);
    console.log (filter);

    max_info (MaxOrders, '3 - Info');
    total_info.max_info = MaxOrders;
}

function max_info (orders, id) {
    console.log (log (id));

    let content = document.getElementById ('content');

    content.innerHTML = '';

    for (order of orders) {
        content.innerHTML +=
            `<th>${get_date (order.timestamp)}</th>` +
            `<th>${separator (order.id)}</th>` +
            `<th>${separator (order.user_id)}</th>` +
            `<th>${separator ((order.total / 100).toFixed (2)) +  ' руб.'}</th>` +
            `<th>${separator ((order.typical / 100).toFixed (2)) +  ' руб.'}</th>` +
            `<th>${separator ((order.recommended / 100).toFixed (2)) +  ' руб.'}</th>`
        ;
    }

    console.log ('Список заказов' + '\n', orders);
}

function filter_info (th, id) {
    console.log (th);
    console.log (id);

    //console.log (total_info.max_info.sort ((a, b) => a [id] - b [id]));
}

function b_4 (orders, id) {
    console.log (log (id));

    // 1 - число заказов, в которых все товары куплены по рекомендации

    let Recommends = orders.filter (order => order.recommended > 0);
    let withoutTypical = Recommends.filter (order => order.typical === 0);
    let total_recommended_4 = withoutTypical.length;

    output ('total_recommended-4', separator (total_recommended_4));

    // 2 - число покупателей, сделавших такие заказы

    let total_users_recommended_4 = user_list (withoutTypical).length;

    output ('users-total_recommended-4', separator (total_users_recommended_4));

    // 3 - сумма заказов, сделанных  24 июня 2015

    let date = {first: new Date (2015, 5, 24), last: ''};
    let dates = Date_list ('total_date-4', orders, date);

    console.log ('b_4 ()' + '\n', dates);

    // 4 - информацию о самом дорогом из заказов, сделанных 24 июня 2015

    Info ('max_price-date', dates, 'total');
}



function b_9 (orders, id) {
    console.log (log (id));

    // 1 - информацию о 10 самых дорогих заказах

    let slice = [];
    for (let order of orders.sort ((b, a) => a.total - b.total).slice (0, 10))
        slice.push (order);
        
    console.log ('b_9 ()' + '\n', slice);

    let content = document.getElementById ('slice_content');

    for (order of slice) {
        content.innerHTML +=
            `<th>${get_date (order.timestamp)}</th>` +
            `<th>${separator (order.id)}</th>` +
            `<th>${separator (order.user_id)}</th>` +
            `<th>${separator (order.total) +  ' руб.'}</th>` +
            `<th>${separator (order.typical) +  ' руб.'}</th>` +
            `<th>${separator (order.recommended) +  ' руб.'}</th>`
        ;
    }

    // 2 - общее количество покупателей

    // 3 - сумму всех заказов

    // 4 - информацию о первом заказе за 28 июня 2015
}

function b_10 (orders, id) {
    console.log (log (id));

    // 1 - информацию о 10 самых дорогих заказах

    // 2 - общее количество покупателей

    // 3 - сумму всех заказов

    // 4 - информацию о первом заказе за 28 июня 2015
}

function b_10_info (orders, id) {
    console.log (log (id));

    let userId = Number (document.querySelector ('#user-id').value);
    let userOrders = orders.filter (order => order.user_id === userId);

    let content = document.getElementById ('filter_content');

    for (order of userOrders) {
        content.innerHTML +=
            `<th>${get_date (order.timestamp)}</th>` +
            `<th>${separator (order.id)}</th>` +
            `<th>${separator (order.total) +  ' руб.'}</th>` +
            `<th>${separator (order.typical) +  ' руб.'}</th>` +
            `<th>${separator (order.recommended) +  ' руб.'}</th>`
        ;
    }

    console.log ('Список заказов' + '\n', userOrders);
}
