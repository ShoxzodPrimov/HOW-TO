const list = document.querySelector("ul");
const displays = document.getElementById("displays");

list.addEventListener("mouseover" , event => {
    const pointer = event.target;
    displays.firstElementChild.textContent = pointer.textContent;

    if ( pointer.textContent === "London" )  {
        // London
        pointer.classList.replace("bg-[#f1f1f1]" , "bg-[#ddd]")
        
        // paris
        pointer.nextElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]") 

        // tokyo
        pointer.nextElementSibling.nextElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]") 

        displays.lastElementChild.textContent = `${pointer.textContent} is the capital city of England.`
    } else if( pointer.textContent === "Paris" ) {
        // paris
        pointer.classList.replace("bg-[#f1f1f1]" , "bg-[#ddd]")
          
        // london
        pointer.previousElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]") 

        // tokyo
        pointer.nextElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]") 

        
        displays.lastElementChild.textContent = `${pointer.textContent} is the capital city of France.`

    } else if( pointer.textContent === "Tokyo" ) {
        // tokyo
        pointer.classList.replace("bg-[#f1f1f1]" , "bg-[#ddd]")

        // paris
        pointer.previousElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]") 

        // london
        pointer.previousElementSibling.previousElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]") 


        displays.lastElementChild.textContent = `${pointer.textContent} is the capital city of Japan.`
    }
});