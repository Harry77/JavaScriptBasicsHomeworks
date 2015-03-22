function replaceATag(str) {
    var openTagPos = str.search('<a');
    while (openTagPos > -1) {
        str = str.replace('<a', '[URL');
        var closeTagPos = str.indexOf('>', openTagPos);
        str = str.substr(0, closeTagPos) + ']' + str.substr(closeTagPos + 1);
        openTagPos = str.search('<a');
    }
    str = str.replace(/<\/a>/g, '[/URL]');
    console.log(str);
}

replaceATag('<ul>\n<li>\n<a href=http://softuni.bg>SoftUni</a>\n</li>\n</ul>\n<ul>\n<li>\n<a href=http://softuni.bg>SoftUni</a>\n</li>\n</ul>');