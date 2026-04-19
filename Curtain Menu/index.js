const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("close-btn");
const navPanel = document.querySelector("nav");
const list = document.querySelector('ul');
const listItems = ["About" , "Services" , "Clients" , "Contact"];


listItems.forEach( items => list.innerHTML +=`<li class="cursor-pointer text-3xl hover:text-white duration-100 ease-in">${items}</li> `);


menuBtn.onclick = () => 
    navPanel.classList.replace("w-0" , "w-[100vw]");


closeBtn.onclick = () =>
    navPanel.classList.replace("w-[100vw]" , "w-0");