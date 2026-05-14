const names = ["Adele" , "Agnes" , 'Billy' , "Bob" , "Calvin"  , "Christina" , "Cindy"];
const list = document.querySelector('.list');
const list_items = names.map(
    item => `<li class="list__items">${item}</li>`
).join('');

list.innerHTML = list_items;

// backend search system:
search.oninput = function(e) {
    const standart = e.target.value.trim().toLowerCase();

    const filter = names.filter(
        item => item.toLowerCase().includes(standart)).
                    map(
                        item =>  `<li class="list__items">${item}</li>`
                    ).join('');
        
            list.innerHTML = filter;
}