const cards = document.querySelectorAll(".card-item")

function flipCard(e){
    console.log(e.target)
}

cards.forEach(card => {
    console.log(card)
    card.addEventListener("click",flipCard)
})