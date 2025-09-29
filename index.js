// Get the button that opens the modal.
const button = document.getElementById('loginBtn'); 

// Get the modal element.
const modal = document.getElementsByClassName('modal')[0];

// Get the <span> element that closes the modal
const closeModalBtn = document.getElementById('closeModalBtn');

// When the user clicks on <span> (x), close the modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// When the user clicks the button, open the modal.
button.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// When the user clicks outside the modal, close it.
document.addEventListener('click', (event) => {
    if (!modal.contains(event.target) && !button.contains(event.target)) {
        modal.classList.add('hidden');
    }
});
