var modal = document.getElementById("modal-schedule");
var btnModal = document.getElementById("modal-schedule-btn");
var closeModalBtn = document.getElementById("modal-close-btn");
var modalOverlay = document.querySelector(".modal-schedule-overlay");
btnModal.onclick = function () {
    if (modal.classList.contains('hidden')) {
        modal.classList.replace('hidden', 'flex');
    }
}
closeModalBtn.onclick = function () {
    if (modal.classList.contains('flex')) {
        modal.classList.replace('flex', 'hidden');
    }
}
modal.addEventListener("click", (e) => {
    if (e.target == modal) {
        if (modal.classList.contains('flex')) {
            modal.classList.replace('flex', 'hidden');
        }
    }
})