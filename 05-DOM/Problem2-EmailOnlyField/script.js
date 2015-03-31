function validate(input) {
    var regex = /\S+@\S+\.\S+/,
        div = document.getElementsByTagName('div');

    div[0].innerHTML = input;

    regex.test(input) ? div[0].style.background = 'lightgreen' : div[0].style.background = 'red';
}