const list = document.querySelector("ul");

const data = [
'Oslo',
"Stockholm",
"Helsinki",
"Berlin",
"Rome",
"Madrid",];

list.innerHTML = data.map(
  item => `<li>${item}</li>`
).join('');

sort.onclick = () => {
  list.innerHTML = data.sort().map(
  item => `<li>${item}</li>`
).join('');
}