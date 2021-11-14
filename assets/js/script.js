var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal(item) {
    modal.classList.toggle('show-modal');

    try {
        document.getElementById('chVal').innerHTML = item;
    }
    catch(err) {
        console.log(err);
    }
}

function toggleModal2() {
    modal.classList.remove('show-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal2();
    }
}

function popView(itemId) {

    toggleModal(itemId);

}

closeButton.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick);
