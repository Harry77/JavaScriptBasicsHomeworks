function countDivs(html) {
    var count = 0;

    while (html.search('</div>') !== -1) {
        count++;
        html = html.slice(html.search('</div>') + 1);
    }

    console.log(count);
}

var input = '<!DOCTYPE html>'+
'    <html>'+
'    <head lang="en">'+
'<meta charset="UTF-8">'+
'<title>index</title>'+
'<script src="/yourScript.js" defer></script>'+
'</head>'+
'<body>'+
'<div id="outerDiv">'+
'<div'+
'class="first">'+
'<div><div>hello</div></div>'+
'</div>'+
'<div>hi<div></div></div>'+
'<div>I am a div</div>'+
'</div>'+
'</body>'+
'</html>';

countDivs(input);