import {TopicList} from './backend.js';

const subjects = document.getElementById("subjects");
const topics = document.getElementById("topics");
const chapters = document.getElementById("chapters");


subjects.onchange = function(e) {
    forSubjects(e.target.value);
}

topics.onchange = function(e) {
    helper( subjects.value , e.target.value)
}

function helper( subject , keys) {
    clearChapters();

    if ( !TopicList[subject][keys] ) 
        return

    TopicList[subject][keys].forEach( list => chapters.innerHTML += `<option value="${list}">${list}</option>`);
}

function forSubjects( subject ) {
    clearChapters();
    topics.innerHTML = null;
    topics.innerHTML = '<option value="">Please select subject first</option>'

    if ( !TopicList[subject]) 
        return
    
    Object.entries(TopicList[subject]).forEach(([key]) => topics.innerHTML += `<option value="${key}">${key}</option>`)
}

function clearChapters() {
    chapters.innerHTML = null;
    chapters.innerHTML = '<option value="">Please select topics first</option>'
}