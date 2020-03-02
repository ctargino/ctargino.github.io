const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const close = document.querySelector('.close-modal');

for (let card of cards) {
  card.addEventListener("click", function() {
    const video_id = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${video_id}`

  })
}

close.addEventListener("click", function () {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector("iframe").src = ""
})
