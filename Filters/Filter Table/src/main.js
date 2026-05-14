import {customer_data} from './data.js';

const data = document.querySelector('.data');

const allData = customer_data.map(
    item => `<div class="data__item">
            <div class="data__name">${item.name}</div>
            <div class="data__country">${item.country}</div>
          </div>`
).join('');

data.innerHTML = allData;

search.oninput = function(e) {
    const text = e.target.value.trim().toLowerCase();

    data.innerHTML = customer_data.filter(
        item => item.name.toLowerCase().includes(text)
    ).map(
      item => `<div class="data__item">
            <div class="data__name">${item.name}</div>
            <div class="data__country">${item.country}</div>
          </div>`
     ).join('');
}