const container = document.querySelector(".container");
const text = document.querySelector('.text');

const data = [         
 {title:"Home", icon:'<i class="bi bi-house-exclamation-fill"></i>',},
 {title:"Menu", icon:'<i class="bi bi-list"></i>',},
 {title:"Trash", icon:'<i class="bi bi-trash"></i>',},
 {title:"Close", icon:'<i class="bi bi-x"></i>',},
 {title:"Folder", icon:'<i class="fa-solid fa-folder"></i>'},
 ];

const buttons = data.map(
    item => `<button class = 'icon-btn'>${item.icon}</button>`
).join('');

const textButton = data.map(
    item => `<button class = 'icon-btn'>${item.icon}<span>${item.title}</span></button>`
).join('');

text.innerHTML = textButton;
container.innerHTML = buttons;