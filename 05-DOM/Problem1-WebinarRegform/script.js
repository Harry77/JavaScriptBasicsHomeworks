function show() {
    var input = document.getElementById('invoice');
    var hiddenDiv = document.getElementById('hidden');

    input.checked ? hiddenDiv.style.visibility = 'visible' : hiddenDiv.style.visibility = 'hidden';
}