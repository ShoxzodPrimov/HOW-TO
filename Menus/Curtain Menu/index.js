const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("close-btn");
const navPanel = document.querySelector("nav");
const list = document.querySelector('ul');
const listItems = ["About" , "Services" , "Clients" , "Contact"];


listItems.forEach( items => list.innerHTML +=`<li class="cursor-pointer text-2xl hover:text-white duration-100 ease-in">${items}</li> `);

menuBtn.onclick = () => navPanel.id === "width" ? navPanel.classList.replace("w-0" , "w-[200px]") : navPanel.classList.replace("h-0" , "h-[100vh]")

closeBtn.onclick = () => navPanel.id === "width" ? navPanel.classList.replace("w-[200px]" , "w-0") : navPanel.classList.replace("h-[100vh]" , "h-0") 