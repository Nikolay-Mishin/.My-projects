const ajax = (url, func) => {
    const done = content => func (content);
    const fail = error => console.error (error);

    fetch (url).then (res => res.json()).then (done).catch (fail);
};
