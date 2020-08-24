const slideButtons = document.querySelectorAll('.events-slide__indicator')
const slideImages = document.querySelectorAll('.events-slide__image')
const slideContent = document.querySelectorAll('.events-slide__content-item')

function slideClick(event) {
    // Hide slide image
    removeImageSlide()
    // Hide slide content
    removeContentSlide()
    // Unselect slide indicator
    removeIndicator()
    // Mark clicked slide indicator as selected
    this.classList.add('is-active');
    // Grabbing image and content item from DOM
    const slideContent = document.querySelector(`#${this.id}-content`)
    const slideImage = document.querySelector(`#${this.id}-image`)
    // Adding show classes to items
    slideContent.classList.add('is-active')
    slideImage.classList.add('is-active')
}

// Remove is-active class from all slides images
function removeImageSlide() {
    slideContent.forEach(item => {
        item.classList.remove('is-active')
    })
}

// Remove is-active class from all slides content
function removeContentSlide() {
    slideImages.forEach(image => {
        image.classList.remove('is-active')
    })
}

// Remove is-active from indicator
function removeIndicator() {
    slideButtons.forEach(button => {
        button.classList.remove('is-active')
    })
}

slideButtons.forEach(button => {
    button.addEventListener('click', slideClick)
});