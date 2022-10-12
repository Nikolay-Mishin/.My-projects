// https://habr.com/ru/post/319228/
// https://uengine.ru/forum/viewtopic.php?f=3&t=2245

// https://habr.com/ru/post/353722/
// https://habr.com/ru/post/357976/

// https://uengine.ru/forum/viewtopic.php?f=3&t=3031
// https://docs.unrealengine.com/en-us/Gameplay/SaveGame
// https://docs.unrealengine.com/en-US/Engine/UMG

// https://api.unrealengine.com/INT/Videos/PLZlv_N0_O1gYdhCvvMKGpCF6LCgBz9XeS/V4ySg1FKzoM/index.html
// https://api.unrealengine.com/INT/Engine/UMG/index.html

// ===== /---/ =====

// https://ru.vuejs.org/index.html

// https://xmlhttprequest.ru/#encoding
// https://learn.javascript.ru/ajax-xmlhttprequest
// http://javascript.ru/ajax/transport/xmlhttprequest

const done = (content) => console.log (content);
const fail = (error) => console.error (error);

const ajax = (url, options, done, fail) => {
    // CORS - Cross Origin Request
    const xhr = new XMLHttpRequest();
    xhr.open ('GET', url, false);
    // Синхронный запрос
    /* try {
        // const data = xhr.send (null);
        const data = await fetch (url); // ожидание ответа
        done (data);
    } catch {
        fail (error);
    } */
    // Асинхронный запрос
    // http://mxn42.ru/avalon/data/planets.json
    xhr.open ('GET', url, true);
    /* xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) done (xhr.responseText);
        else fail (`${xhr.status} ${xhr.responseText}`);
    }; */
    xhr.addEventListener ('load', () => done (xhr.response));
    xhr.addEventListener ('error', () => fail (`${xhr.status} ${xhr.responseText}`));
    xhr.send (null);
};

const promise = new Promise ((done, fail) => {
    ajax ('https://swapi.co/api/people/1', {}, done, fail);
});

$ (async () => {
    $ ('button').on ('click', () => {
        let url = 'https://swapi.co/api/people/1';

        // Ajax - JS - {}
        ajax (url, {}, done, fail);

        // Многопоточные запросы - "Спагетти"
        /* ajax ('https://swapi.co/api/people/1', {}, () => {
            ajax ('https://swapi.co/api/people/1', {}, () => {
                // ...
            },
            fail2);
        },
        fail); */

        // Promise Метод - {}
        // then передает далее результат работы функции done (result) => then (result)
        promise.then (done).catch (fail);

        // Ajax - jQuery - {}
        $.ajax (url)
            .done (done).fail (fail);

        // Ajax - Fetch - Response {}
        fetch (url)
            .then (done)
            .catch (fail);

        // Ajax - Json - {}
        fetch (url)
            .then (res => res.json())
            .then (done)
            .catch (fail);
    });
});
