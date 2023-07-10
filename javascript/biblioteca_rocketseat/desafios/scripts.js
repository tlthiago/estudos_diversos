const buttonOpenModal = document.querySelector("#openModal");

const modalWrapper = document.querySelector(".modal-wrapper");

function removeClass() {
    modalWrapper.classList.remove("invisible");
}

buttonOpenModal.addEventListener("click", removeClass);
document.addEventListener("keydown", function(event) {
    const isEscKey = event.key === "Escape";

    if(isEscKey && !modalWrapper.classList.contains("invisible")) {
        modalWrapper.classList.add("invisible");
    }
})