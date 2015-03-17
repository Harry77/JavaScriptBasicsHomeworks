function extractHyperlinks(input) {
    var text = input.join("");
    var aPos = text.search('<a');
    var links = new Array();

    while (aPos !== -1) {
        text = text.substr(aPos + 3);
        var linkEnd = text.search('>');
        var link = text.substring(0, linkEnd + 1);
        var hrefPos = link.search('href');
        while (hrefPos !== -1) {
            link = link.substr(hrefPos + 4);
            link = link.trim();
            if (link.charAt(0) === '=') {
                link = link.substr(1);
                link = link.trim();
                if (link.charAt(0) === String.fromCharCode(39)) {
                    link = link.substr(1);
                    linkEnd = link.search(String.fromCharCode(39));
                    links.push(link.substring(0, linkEnd));
                } else if (link.charAt(0) === String.fromCharCode(34)) {
                    link = link.substr(1);
                    linkEnd = link.search(String.fromCharCode(34));
                    links.push(link.substring(0, linkEnd));
                } else {
                    linkEnd = link.search(String.fromCharCode(32));
                    if (linkEnd === -1) {
                        linkEnd = link.search(String.fromCharCode('>'));
                    }
                    links.push(link.substring(0, linkEnd));
                }
            }
            hrefPos = link.search('href');
        }
        aPos = text.search('<a');
    }

    for (var i = 0; i < links.length; i++) {
        console.log(links[i]);
    }
}

var input = new Array('<p>This text has no links</p>');
extractHyperlinks(input);