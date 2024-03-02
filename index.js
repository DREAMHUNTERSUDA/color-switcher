const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id == 'grey') {
            body.style.background = 'grey'
            body.style.color='white'
        }
        if (e.target.id == 'white') {
            body.style.background = 'white'
            body.style.color='black'
        }
        if (e.target.id == 'blue') {
            body.style.background = 'blue'
            body.style.color='black'
        }
        if (e.target.id == 'yellow') {
            body.style.background = 'yellow'
            body.style.color='black'
        }

    })
});