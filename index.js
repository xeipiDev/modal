// Get the button that opens the modal.
const button = document.getElementById('loginBtn'); 

// Get the modal element.
const modal = document.getElementsByClassName('modal')[0];

// Get the sign up button.
const modalSignUp = document.getElementById('modal-signUp');

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

// Add same logic to the sign up button.
const signUpButton = document.getElementById('signUp'); 

// When user clicks the sign up button, open the sign up modal.
signUpButton.addEventListener('click', () => {
    modalSignUp.classList.remove('hidden');
});

// When user clicks outside the sign up modal, close it.
document.addEventListener('click', (event) => {
    if (!modalSignUp.contains(event.target) && !signUpButton.contains(event.target)) {
        modalSignUp.classList.add('hidden');
    }
});


