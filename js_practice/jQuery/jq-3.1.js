$ (() => {
    let [a, b] = [$ ('[name=a]'), $ ('[name=b]')],
        [op, btn, result] = [$ ('[name=op]'), $ ('[name=btn]'), $ ('[name=result]')];
    const operation = {
        '+': (a , b) => a + b,
        '-': (a , b) => a - b,
        '*': (a , b) => a * b,
        '/': (a , b) => a / b
    };
    const calc = () => operation [op.val()] (Number (a.val()), Number (b.val()));
    /* const calc = (a, b, op) => {
        [a, b, op] = [Number (a.val()), Number (b.val()), op.val()];
        return (op === '+') ? a + b :
                (op === '-') ? a - b :
                (op === '*') ? a * b :
                (op === '/') ? a / b : 'Operation is undefined';
                //throw Error ('Operation is undefined');
    }; */
    b.on ('input', () => {if (a.val() > 0 && b.val() > 0) btn.prop ('disabled', false)});
    btn.on ('click', () => result.text ('Результат: ' + calc()));
});
