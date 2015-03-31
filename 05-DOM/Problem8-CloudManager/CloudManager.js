function solve(input) {
    var extObj = {},
        fileDetails,
        fName,
        fExt,
        fSize,
        keys,
        sortedExt = {},
        i;

    function sortObj(extObj, keys) {
        for (i = 0; i < keys.length; i++) {
            sortedExt[keys[i]] = extObj[keys[i]];
            sortedExt[keys[i]].files = sortedExt[keys[i]].files.sort();
            sortedExt[keys[i]].memory = sortedExt[keys[i]].memory.toFixed(2);
        }

        return sortedExt;
    }

    input.forEach(function(element) {
        fileDetails = element.split(' ');
        fName = fileDetails[0];
        fExt = fileDetails[1];
        fSize = Number(fileDetails[2].slice(0, -2));

        if (fExt in extObj) {
            extObj[fExt].files.push(fName);
            extObj[fExt].memory += fSize;
        } else {
            extObj[fExt] = {files : [fName], memory : fSize};
        }
    });

    keys = Object.keys(extObj).sort();

    sortedExt = sortObj(extObj, keys);
    console.log(JSON.stringify(sortedExt));
}

solve(['sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB']);