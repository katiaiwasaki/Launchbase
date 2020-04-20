const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards) (
    card.addEventListener('click', function() {
        modalOverlay.classList.add('active')

        const link_id = card.getAttribute('id')

        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${link_id}`
    })
)


document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})

document.querySelector('.maximize-modal').addEventListener('click', function() {
    if (modal.classList.contains('maximize')){
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
    
})


