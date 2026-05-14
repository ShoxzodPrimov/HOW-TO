import {customer_data} from './data.js';

const data = document.querySelector('.data');

const allData = customer_data.map(
    item => `<div class="data__item">
            <div class="data__name">${item.name}</div>
            <div class="data__country">${item.country}</div>
          </div>`
).join('');

data.innerHTML = allData;

sorting.onclick = function (e) {
  data.innerHTML = customer_data.sort(
    ( a , b ) => a.name < b.name ? -1 : 1 ).map(
    item => `<div class="data__item">
            <div class="data__name">${item.name}</div>
            <div class="data__country">${item.country}</div>
          </div>`
).join('');
}