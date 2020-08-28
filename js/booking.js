const name = document.querySelector('#name')
const email = document.querySelector('#email')
const day = document.querySelector('#day')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const meridiem = document.querySelector('#meridiem')

const numOfPeople = document.querySelector('#num-of-people')
const plural = document.querySelector('.numpicker-text')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')

minusButton.addEventListener('click', event => {
    event.preventDefault()
    if (numOfPeople.textContent > 1) {
        numOfPeople.textContent = parseInt(numOfPeople.textContent) - 1
        checkPlural()
    }
})

plusButton.addEventListener('click', event => {
    event.preventDefault()
    if (numOfPeople.textContent < 20) {
        numOfPeople.textContent = parseInt(numOfPeople.textContent) + 1
        checkPlural()
    }
})

function checkPlural() {
    if (numOfPeople.textContent === '1') {
        plural.textContent = 'person'
    } else {
        plural.textContent = 'people'
    }
}


