// Объекты и Массивы

a = [23, 55, "3245", new Date ()]

a[4];
a.length;
a.push(element);
a.splice (i, 1);

[
    -2252.2, "Hello", [],
    {
        "name": "Maxim", // ключ: свойство (значение)
        "age": 132,
        "pet": {"name": "Bond"},
        "library": ["Tom Soyer", "1984"]
    }
]

let o = {
    "name": "Maxim", // ключ: свойство (значение)
    "age": 132,
    "pet": {"name": "Bond"},
    "library": ["Tom Soyer", "1984"]
}

// доступ к свойству объект
o.age;
o["age"];

// Изменение или Добавление свойства
o.hairColor = "blonde";
o.hairColor = "blonde";

// Удаление свойства
delete o.hairColor;
delete o["hairColor"];
o.hairColor = undefined; // не задано значение

o.hairColor = null; // свойство отсутствует

// Создание скрытого свойства - специальный объект для формирования приватных свойств
let name = Symbol ();
o[name] = "Maxim";

// ===== //---// =====


