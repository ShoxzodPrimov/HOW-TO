const btn = document.querySelector('button');

btn.onclick = function(e) {
    const more = document.getElementById("more");
    const less = document.getElementById("less");
    const title = e.target.textContent == 'Read More' ? "Read Less" : 'Read More';
    
    btn.textContent = title;
    if ( less.className ) {
        less.classList.remove("hidden");
        more.classList.add("hidden");
        return
    }
        more.classList.remove("hidden");
        less.classList.add("hidden");
}