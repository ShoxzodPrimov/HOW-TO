const modal = document.getElementById("showModal");

const list = document.querySelector("ul");
let colorChanger = 'bg-red-600';

list.addEventListener("click" , event => {

    if (event.target.id) 
        return

    const listItem = event.target;
    modal.firstElementChild.textContent = listItem.textContent;

    if ( listItem.textContent === "London" ) {
        modal.classList.replace( colorChanger , 'bg-red-600' );
        // London:
        listItem.classList.replace('bg-[#555]' , 'bg-red-600');
        listItem.classList.replace( "hover:bg-[#777]" , "hover:bg-red-600")

        // Paris:
        listItem.nextElementSibling.classList.replace( 'bg-green-600' , "bg-[#555]" )
        listItem.nextElementSibling.classList.replace( 'hover:bg-green-600' , "hover:bg-[#777]" )

        // Tokyo:
        listItem.nextElementSibling.nextElementSibling.classList.replace( 'bg-yellow-600' , "bg-[#555]" )
        listItem.nextElementSibling.nextElementSibling.classList.replace( 'hover:bg-yellow-600' , "hover:bg-[#777]" )

        // Oslo:
        listItem.nextElementSibling.nextElementSibling.nextElementSibling.classList.replace( 'bg-purple-600' , "bg-[#555]" )
        listItem.nextElementSibling.nextElementSibling.nextElementSibling.classList.replace( 'hover:bg-purple-600' , "hover:bg-[#777]" )
                
        colorChanger = 'bg-red-600';
        modal.lastElementChild.textContent = `${listItem.textContent} is the capital city of England.`; 
    } else if ( listItem.textContent === "Paris" ) {
        modal.classList.replace( colorChanger , "bg-green-600" );
        
        // Paris: 
        listItem.classList.replace('bg-[#555]' , 'bg-green-600');
        listItem.classList.replace("hover:bg-[#777]" , "hover:bg-green-600")

        // London:
        listItem.previousElementSibling.classList.replace( 'bg-red-600' , "bg-[#555]" )
        listItem.previousElementSibling.classList.replace( 'hover:bg-red-600' , "hover:bg-[#777]" )

        // Tokyo:
        listItem.nextElementSibling.classList.replace( 'bg-yellow-600' , "bg-[#555]" )
        listItem.nextElementSibling.classList.replace( 'hover:bg-yellow-600' , "hover:bg-[#777]" )
        
        // Oslo:
        listItem.nextElementSibling.nextElementSibling.classList.replace( 'bg-purple-600' , "bg-[#555]" )
        listItem.nextElementSibling.nextElementSibling.classList.replace( 'hover:bg-purple-600' , "hover:bg-[#777]" )

        colorChanger = 'bg-green-600';
        modal.lastElementChild.textContent = `${listItem.textContent} is the capital city of France.`; 
    } else if ( listItem.textContent === "Tokyo" ) {
        modal.classList.replace( colorChanger , "bg-yellow-600" );
        
        // Tokyo:
        listItem.classList.replace('bg-[#555]' , 'bg-yellow-600');
        listItem.classList.replace("hover:bg-[#777]" , "hover:bg-yellow-600");

        // Oslo:
        listItem.nextElementSibling.classList.replace('bg-purple-600' , 'bg-[#555]');
        listItem.nextElementSibling.classList.replace('hover:bg-purple-600' , 'hover:bg-[#777]');

        // Paris:
        listItem.previousElementSibling.classList.replace('bg-green-600' , 'bg-[#555]');
        listItem.previousElementSibling.classList.replace('hover:bg-green-600' , 'hover:bg-[#777]');

        // London:
        listItem.previousElementSibling.previousElementSibling.classList.replace('bg-red-600' , 'bg-[#555]');
        listItem.previousElementSibling.previousElementSibling.classList.replace('hover:bg-red-600' , 'hover:bg-[#777]');

        colorChanger = 'bg-yellow-600';
        modal.lastElementChild.textContent = `${listItem.textContent} is the capital city of Japan.`; 
    } else if ( listItem.textContent === "Oslo" ) {
        modal.classList.replace( colorChanger , "bg-purple-600" );
        // "Oslo":
        listItem.classList.replace('bg-[#555]' , 'bg-purple-600');
        listItem.classList.replace("hover:bg-[#777]" , "hover:bg-purple-600")

        // Tokyo:
        listItem.previousElementSibling.classList.replace('bg-yellow-600' , 'bg-[#555]');
        listItem.previousElementSibling.classList.replace('hover:bg-yellow-600' , 'hover:bg-[#777]');

        // Paris:
        listItem.previousElementSibling.previousElementSibling.classList.replace('bg-green-600' , 'bg-[#555]');
        listItem.previousElementSibling.previousElementSibling.classList.replace('hover:bg-green-600' , 'hover:bg-[#777]');

        // London:
        listItem.previousElementSibling.previousElementSibling.previousElementSibling.classList.replace('bg-red-600' , 'bg-[#555]');
        listItem.previousElementSibling.previousElementSibling.previousElementSibling.classList.replace('hover:bg-red-600' , 'hover:bg-[#777]');

        colorChanger = 'bg-purple-600';
        modal.lastElementChild.textContent = `${listItem.textContent} is the capital city of Norway.`; 
    }
});