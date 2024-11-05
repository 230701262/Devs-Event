const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  const header = accordion.querySelector('.accordion-header');
  const content = accordion.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    content.classList.toggle('active');
  });
});
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeModalBtn = document.querySelector('.close-modal');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Basic validation
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Submit the form or perform other actions
  // ...
});

function isValidEmail(email) {
  // Implement email validation logic here
  // ...
}
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenContent = document.getElementById('hiddenContent');

showMoreBtn.addEventListener('click', () => {
  hiddenContent.style.display = 'block';
  showMoreBtn.style.display = 'none';
});
const element = document.getElementById('myElement');

element.addEventListener('mouseover', () => {
  element.classList.add('hover-animation');
});

element.addEventListener('mouseout', () => {
  element.classList.remove('hover-animation');
});
