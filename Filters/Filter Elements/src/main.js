import data from './data.js';
const cards = document.querySelector('.cards');
const Buttons = document.querySelector('.container__buttons');

cards.innerHTML = data.all.map(
   item => `
        <div class="cards__items">
            ${item}
        </div>
    `
).join('');

Buttons.onclick = function(e) {

  if (!e.target.value)
    return

  const changeValue = e.target.value;
  const buttonList = document.querySelectorAll('button');
  const catchData = data[changeValue];

  // active
  buttonList.forEach( btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  
  // items
  cards.innerHTML = catchData.map(
    item => `
        <div class="cards__items">
            ${item}
        </div>
    `)
                          .join('');
}