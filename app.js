// Lodash is added to window as "_"

const noThrottle = document.querySelector('.no-throttle');
const throttled = document.querySelector('.throttled');
const debounced = document.querySelector('.debounced');

// No throttle or debounce
const fetchEndpoint = () => {
    window.fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(console.log);
}
noThrottle.addEventListener('input', fetchEndpoint);

// With throttle
const throttledFunction = _.throttle(fetchEndpoint, 1000);
throttled.addEventListener('input', throttledFunction);

// With debounce
const debouncedFunction = _.debounce(fetchEndpoint, 1000)
debounced.addEventListener('input', debouncedFunction);


const log = () => {
    console.log('Running!');
}

const throttleLog = _.throttle(log, 1000)
const debounceLog = _.debounce(log, 1000)

// On resize
// window.addEventListener('resize', log);

// On scroll
// window.addEventListener('scroll', log);