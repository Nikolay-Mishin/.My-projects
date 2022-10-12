let o = {};
console.log (o);

const main = () => {
    let data = ordersList.slice();
    b_3_1 (data);
    b_3_2 (data);
    b_3_3 (data);
    b_3_4 (o.Recommends);
}

document.addEventListener ('DOMContentLoaded', main);

const separator = n => String(n).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

const get = id => document.getElementById (id);

const output = (id, value, after, separate) => {
    o [id] = value;
    if (typeof after === 'undefined') after = '';
    if (typeof separate === 'undefined') value = separator (value);
    get (id).textContent = value + after;
}

// let max = orders[0];
// orders.forEach (order => {if (order [attr] > max [attr]) max = order});
const max = (orders, attr) => orders.reduce ((max, order) => order [attr] > max [attr] ? max = order : max);

const time_filter = (orders, first, last) => {
    if (last === '') {
        last = new Date (first);
        last.setDate (first.getDate () + 1);
    }
    if (!last) last = get_date (max (orders, 'timestamp').timestamp + 1);
    const [f, l] = [first.getTime() / 1000, last.getTime() / 1000];
    return orders.filter (order => f <= order.timestamp && order.timestamp < l);
}

const get_date = time => new Date (time * 1000);

const date_list = (id, orders, date) => {
    let dates = time_filter (orders, date.first, date.last), sum = dates.reduce ((sum, order) => sum + order.total, 0);
    output (id, (sum / 100).toFixed (2), ' руб.');
}

const user_list = (orders, filter) => {
    if (filter === 'permanent') filter = 1;
    else filter = 0;
    const usersDic = {}, Users = [];
    orders.forEach (order => {
        if (!(order.user_id in usersDic))
            usersDic [order.user_id] = 0;
        usersDic [order.user_id]++;
    });
    Object.keys (usersDic).forEach (key => {
        let user_id = key;
        if (usersDic [user_id] > filter) {
            Users.push ({
                user_id: user_id,
                orders: usersDic [user_id]
            })
        }
    });
    return Users;
}

const max_price = (id, date, info) => {
    id.innerHTML = `date: ${date} <br>`;
    let o = Object.keys (ordersList[0]);
    o.forEach ((order, i) => {
        // let value = `${o [i]}: ${separator (info [i])} <br>`;
        // if (i > 2) value = `${o [i]}: ${separator ((info [i] / 100).toFixed (2))} руб. <br>`;
        let value = i <= 2 ? `${o [i]}: ${separator (info [i])} <br>` : `${o [i]}: ${separator ((info [i] / 100).toFixed (2))} руб. <br>`;
        id.innerHTML += value;
    });
}

const info = (id, list, filter) => {
    let _max = max (list, filter), max_price_date = (_max.total / 100).toFixed (2);
    output (id, max_price_date, ' руб.');
    max_price (get (id), get_date (_max.timestamp), [_max.id, _max.user_id, _max.timestamp, _max.total, _max.recommended, _max.typical]);
}

const b_3_1 = orders => {
    o.withoutRecommends = orders.filter (order => order.recommended === 0);
    output ('non-recommended_value', o.withoutRecommends.length);
}

const b_3_2 = orders => date_list ('total_date', orders, {first: new Date (2015, 5, 24)});

const b_3_3 = orders => {
    o.Recommends = orders.filter (order => order.recommended > 0);
    output ('total_users-recommended', user_list (o.Recommends).length);
}

const b_3_4 = orders => {
    info ('max_price-recommended', orders, 'total');
    o.max_info = max_info (orders.filter (order => order.recommended === (o ['max_price-recommended'] * 100)));
}

const max_info = orders => {
    let content = get ('content'), o = Object.keys (orders[0]);
    orders.forEach (order => {
        let inner = '';
        o.forEach ((attr, i) => {
            // let value = separator (order [attr]);
            // if (i === 2) value = get_date (order [attr]);
            // if (i > 2) value = separator ((order [attr] / 100).toFixed (2)) + ' руб.';
            // let value = i < 2 ? separator (order [attr]) : i === 2 ? get_date (order [attr]) : separator ((order [attr] / 100).toFixed (2)) + ' руб.';
            inner += `<th>${i < 2 ? separator (order [attr]) : i === 2 ? get_date (order [attr]) : separator ((order [attr] / 100).toFixed (2)) + ' руб.'}</th>`;
        });
        content.innerHTML += inner;
    });
    return orders;
}
