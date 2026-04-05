const listItem = document.querySelectorAll("li");

listItem.forEach(
    (target) => {
            target.onclick = function() {
                    target.lastElementChild.classList.toggle("hidden");
                    target.classList.toggle("mb-[100px]");
                    target.firstElementChild.nextElementSibling.classList.toggle("bi-dash");  
                    target.firstElementChild.nextElementSibling.classList.toggle("bi-plus-lg"); 
            }
    }
)