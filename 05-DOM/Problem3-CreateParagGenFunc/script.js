function createParagraph(parentID, content) {
    var parag = document.createElement('p'),
        parent = document.getElementById(parentID);

    parag.innerHTML = content;
    parent.appendChild(parag);
}

createParagraph('wrapper', 'Some text');