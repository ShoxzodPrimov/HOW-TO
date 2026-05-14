import data from './data.js';
const container = document.querySelector('.container');
const list = document.querySelector('.list');

dropdown.onclick = function() {
    container.classList.toggle('active');
}

const allData = data.map(
  item => ` <li class="list__items">${item}</li>`
).join('');

list.innerHTML = allData;

// search system:
search.oninput = e => {
list.innerHTML = data.filter(
    item => item.toLowerCase().includes(e.target.value.trim().toLowerCase())
  ).map(
    item => ` <li class="list__items">${item}</li>`
  ).join('');
}