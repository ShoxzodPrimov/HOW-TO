const parent = document.getElementById("selectModal");
const showContent = document.querySelector(".showContent");

parent.onclick = function(event) {
  const selectEvent = event.target;
  showContent.firstElementChild.textContent = selectEvent.textContent;
  // showContent.nextElementSibling

if ( selectEvent.textContent === "London" ) {
    // London;
    selectEvent.classList.replace("bg-[#f1f1f1]" , "bg-[#ddd]");
    
    // Paris:
    selectEvent.nextElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]" );

    // Tokyo
    selectEvent.nextElementSibling.nextElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]" );

    showContent.lastElementChild.textContent = `${selectEvent.textContent} is the capital city of England.`;
  } else if ( selectEvent.textContent === "Paris" ) {
    // Paris
    selectEvent.classList.replace("bg-[#f1f1f1]" , "bg-[#ddd]");

    // London:
    selectEvent.previousElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]")

    // Tokyo
    selectEvent.nextElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]")

    showContent.lastElementChild.textContent = `${selectEvent.textContent} is the capital city of France.`;
  } else if (selectEvent.textContent === "Tokyo")  {
    // Tokyo
    selectEvent.classList.replace("bg-[#f1f1f1]" , "bg-[#ddd]")

    // Paris
    selectEvent.previousElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]")
    selectEvent.previousElementSibling.previousElementSibling.classList.replace("bg-[#ddd]" , "bg-[#f1f1f1]")

    showContent.lastElementChild.textContent = `${selectEvent.textContent} is the capital city of Japan.`;
  }
}