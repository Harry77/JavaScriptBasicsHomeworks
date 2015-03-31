function HTMLGenerator() {
    this.createParagraph = function(id, text) {
        var parent = document.getElementById(id),
            p = document.createElement('p');

        p.innerHTML = text;
        parent.appendChild(p);
    };

    this.createDiv = function(id, divClass) {
        var parent = document.getElementById(id),
            div = document.createElement('div');

        div.className = divClass;
        parent.appendChild(div);
    };

    this.createLink = function(id, text, url) {
        var parent = document.getElementById(id),
            a = document.createElement('a');

        a.href = url;
        a.innerHTML = text;
        parent.appendChild(a);
    };
}

var HTMLGen = new HTMLGenerator();
HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');