const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("close-btn");
const navPanel = document.querySelector("nav");

menuBtn.onclick = () => {
    navPanel.classList.replace("w-0" , "w-[100vw]");
}

closeBtn.onclick = () => {
    navPanel.classList.replace("w-[100vw]" , "w-0");
}