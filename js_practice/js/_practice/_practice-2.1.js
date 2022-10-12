/* ...................................... 

    	2.1 Циклы
		
...................................... */

// ===== Задача № 1 - Теория =====

// Примеры циклов


n = Number(prompt())
e2 = 1
c = 0
while (e2 < n) {
   e2 = e2 * 2
   c  = c + 1
}
console.log(c, '---->', e2)

i = a.length - 1
while (i--> 0) {
    a[i]
}

n = Number(prompt())
e2 = 1
c = 0
while (e2 < n) {
  e2 = e2 * 2
  c  = c + 1
}
console.log(c, '---->', e2)

i = a.length - 1
while (i--> 0) {
  a[i]
}


s = 'Привет, Мир'
k = 0
i = 0
while (i < s.length) {
  if (s[i] == 'р')
    k = k + 1
  i  = i + 1
}

students = []
k = 0

for (let i = 0 ; i < s.students ; i += 1 ) {
  let person = students[i];
  if (person.age < 17)
    k += 1
}

students.forEach(function(person) {
  if (person.age < 17)
    k += 1
});

for (let person of students) {
  if (person.age < 17)
    k += 1
}

// ===== //---// =====



// ===== Задача № 2 =====

/*
С помощь цикла while вывести в консоль десять цифр, по одной в строке.
*/

let n = 10;
let i = 0;

while (i < n) {
    console.log (i);
    i++;
}



/*
Решение
*/

let d = 0;
while (d < 10) {
    console.log(d);
    d = d + 1;
}

// ===== //---// =====



// ===== Задача № 3 =====

/*
Минимальный делитель

Дано целое число, не меньшее 2. Выведите его наименьший натуральный делитель, отличный от 1. 

Sample Input:

35
Sample Output:

5
*/

function min_divider (n) {
    let d = 2;
    if (n >= d) {
        for (d; d <= n; d++) {
            if (n % d == 0) {
                break;
            }
        }
        
        return d;
    }
    else {
        return 'Введидите значение, не меньшее ' + d;
    }
}

let n = Number (prompt ());

console.log (min_divider (n));



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 4 =====

/*
Просто?

Дано натуральное число N > 1. Если это простое число, выведите YES, иначе выведите NO.

Входные данные

Натуральное 0≤n≤10^9.

Sample Input 1:

6
Sample Output 1:

NO
Sample Input 2:

7
Sample Output 2:

YES
*/

function simple_number (n) {
    if (n > 1) {
        if (min_divider (n) == n) {
            return 'YES';
        }
        else {
            return 'NO';
        }
    }
    else {
        return 'Введидите значение, большее 1';
    }
}

function min_divider (n) {
    let d = 2;
    if (n >= d) {
        for (d; d <= n; d++) {
            if (n % d == 0) {
                break;
            }
        }
        
        return d;
    }
    else {
        return 'Введидите значение, не меньшее ' + d;
    }
}

let n = Number (prompt ());

console.log (simple_number (n));



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 5 =====

/*
Первые простые

Вывести N первых простых чисел.

Sample Input:

10
Sample Output:

2 3 5 7 11 13 17 19 23 29 
*/

function simple_number (n) {
    if (n > 1) {
        if (min_divider (n) == n) {
            return 'YES';
        }
        else {
            return 'NO';
        }
    }
    else {
        return 'Введидите значение, большее 1';
    }
}

function min_divider (n) {
    let d = 2;
    if (n >= d) {
        for (d; d <= n; d++) {
            if (n % d == 0) {
                break;
            }
        }
        return d;
    }
    else {
        return 'Введидите значение, не меньшее ' + d;
    }
}

let n = Number (prompt ());
let numb = 2;
let simple = '';

for (let i = 0; i < n; i++) {
    if (simple_number (numb) == 'YES') {
        simple += numb;
        if (i < (n - 1)) {
            simple += ' ';
        }
    }
    numb++;
}

console.log (simple_number (n));



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 6 - Теория =====

/*
Дальше несложные задачи, но целые числа будут большие.
Большие целые.
*/

// ===== //---// =====



// ===== Задача № 7 =====

/*
Числа Фибоначчи

Дано натуральное число, необходимо вычислить n-е число Фибоначчи
F0=0
F1=1 
F2=1 
F3=2 
F4=3 
F5=5 
... 
Fn=Fn−2+Fn−1 

Входные данные

0≤n≤100.

Выходные данные

n-е число Фибоначчи.

Sample Input:

6
Sample Output:

8
*/

function fib (n) {
    let a = BigInt (1),
        b = BigInt (1);
    if (n == 0) return 0;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = BigInt (c);
    }
    b = b.toString().split ('n');
    return b[0];
}

let n = Number (prompt ());

console.log (fib (n));



/*
Решение
*/



// ===== //---// =====



// ===== Задача № 8 =====

/*
Факториал

Вычислите n!=1⋅2⋅3⋅4⋅...⋅n

Входные данные

Натуральное 0≤n≤1000.

Выходные данные

Факториал n.
Sample Input:

7
Sample Output:

5040
*/

function Factorial (n) {
    var f = [BigInt ("1"), BigInt ("1")];
    var i = 2;

    if (typeof f[n] != 'undefined')
        return Split (f[n], 'n');
    if (n > 0) {
        var result = f[i-1];
        for (i; i <= n; i++)
            f[i] = result *= BigInt (i);
        //result = result.toString().split ('n');
        //return result[0];
        return Split (result, 'n');
    }
    else { return ''; }
}

function Split (value, split) {
    value = value.toString().split (split);
    return value[0];
}

let n = Number (prompt ());

console.log (Factorial (n));



/*
Решение
*/

let n = Number(prompt());
let f = BigInt(1);
for (let i = BigInt(1); i <= n; i += BigInt(1))
    f *= i;
console.log(f.toString());
