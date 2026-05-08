import {data} from "./data.js";

const render = data.map(
    item => 
        `<button style = 'background:${item.bgColor}'>
            ${item.icons}
        </button>`
).join('');

const container = document.querySelector('.container');

container.innerHTML = render;