const winter = document.getElementById("winter");
const spring = document.getElementById("spring");
const summer = document.getElementById("summer");
const autumn = document.getElementById("autumn");
const winterBooks = document.getElementById("winter-id");
const springBooks = document.getElementById("spring-id");
const summerBooks = document.getElementById("summer-id");
const autumnBooks = document.getElementById("autumn-id");

function showSeason() {
  if (winter.checked) {
    winterBooks.style.transition = "5s ease-in-out";
    winterBooks.style.display = 'flex';
    springBooks.style.display = 'none';
    summerBooks.style.display = 'none';
    autumnBooks.style.display = 'none';
  }
  if (spring.checked) {
    winterBooks.style.display = 'none';
    winterBooks.style.transition = "5s ease-in-out";
    springBooks.style.display = 'flex';
    summerBooks.style.display = 'none';
    autumnBooks.style.display = 'none';
  }
  if (summer.checked) {
    winterBooks.style.display = 'none';
    winterBooks.style.transition = "5s ease-in-out";
    springBooks.style.display = 'none';
    summerBooks.style.display = 'flex';
    autumnBooks.style.display = 'none';
  }
  if (autumn.checked) {
    winterBooks.style.display = 'none';
    winterBooks.style.transition = "5s ease-in-out";
    springBooks.style.display = 'none';
    summerBooks.style.display = 'none';
    autumnBooks.style.display = 'flex';
  }
}

const radioButtons = document.querySelectorAll('input[name="season"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', showSeason);
});

