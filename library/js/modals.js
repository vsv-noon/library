// const btns = document.querySelectorAll('.btn');
// const modalOverlay = document.querySelector('.modal-overlay');
// const modals = document.querySelectorAll('.modal');

// btns.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     let path = e.currentTarget.getAttribute('data-path');
//     modals.forEach((el) => {
//       el.classList.remove('modal--visible');
//     });

//     document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
//     modalOverlay.classList.add('modal-overlay--visible');
//   })

// })

// modalOverlay.addEventListener('click', (e) => {
//   console.log(e.target);
//   if (e.target == modalOverlay) {
//     modalOverlay.classList.remove('modal-overlay--visible');
//     modals.forEach((el) => {
//       el.classList.remove('modal--visible');
//     });
//   }
// });

const btns = document.querySelectorAll('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const hamburger = document.querySelector('.menu-toggle');

const closeBtn = document.querySelectorAll('.close-btn');

closeBtn.forEach((el) => {
  el.addEventListener('click', (el) => {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  })
})

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    // window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay || e.target == hamburger) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});

// Регистрация нового пользователя
const registerNewUser = document.querySelector('.register-form-btn-submit');
const registerFirstName = document.querySelector('.register-form-input-firstname');
const registerSurname = document.querySelector('.register-form-input-surname');
const registerEmail = document.querySelector('.register-form-input-email');
const registerPassword = document.querySelector('.register-form-input-password');

registerNewUser.addEventListener('click', () => {

  localStorage.setItem('cardNumber', getRandomNumber());
  localStorage.setItem('userName', registerFirstName.value);
  localStorage.setItem('userSurname', registerSurname.value);
  localStorage.setItem('userEmail', registerEmail.value);
  localStorage.setItem('userPassword', registerPassword.value);
  localStorage.setItem('registered', true);
  localStorage.setItem('active', true);
  localStorage.setItem('visits', 1);
  localStorage.setItem('buyCard', false);
  localStorage.setItem('booksCount', 0);
  modalOverlay.classList.remove('modal-overlay--visible');
  modals.forEach((el) => {
    el.classList.remove('modal--visible');
  });
  event.preventDefault();
  location.reload();
});

// Сгенерировать случайное число
function getRandomNumber() {
  let hexNumber = (Math.floor(Math.random() * 68719476735) + 1).toString(16).toUpperCase();

  return hexNumber.padStart(9, '0');
}

// Страница после успешного входа в аккаунт
const activeStatus = localStorage.getItem('active');
const userEmail = localStorage.getItem('userEmail');
const userPassword = localStorage.getItem('userPassword');

const myProfileUserName = document.querySelector('.my-profile-user-name');
const myProfileInitials = document.querySelector('.my-profile-initials');
const visitsCount = document.querySelector('.my-profile-list-visits-count');
const cardNumberField = document.querySelector('.span-my-pofile-card-number');
const booksCountText = document.querySelector('.my-profile-list-books-count');


if (localStorage.getItem('active') == 'true') {
  document.querySelector('.profile-btn').classList.add('profile-btn-hidden');
  document.querySelector('.initials').classList.remove('profile-btn-hidden');
  document.querySelector('.initials').textContent = localStorage.getItem('userName').slice(0, 1).toUpperCase() + localStorage.getItem('userSurname').slice(0, 1).toLocaleUpperCase();
  document.querySelector('.initials').title = localStorage.getItem('userName') + ' ' + localStorage.getItem('userSurname');
  document.querySelector('.h4-modal--2').textContent = localStorage.getItem('cardNumber');
  document.querySelector('.h3-library-card-right-column').innerHTML = 'Visit your profile';
  document.querySelector('.p-library-card-box-right-column').innerHTML = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';

  document.querySelectorAll('.btn-buy').forEach((el) => {
    if (localStorage.getItem('buyCard') == 'false') {
      el.setAttribute('data-path', 'buy-card');
    } else {
      el.setAttribute('data-path', 'buy-book');
    }
  });

  document.querySelector('.check-the-card-form-input-reader-name').value = localStorage.getItem('userName') + ' ' + localStorage.getItem('userSurname');
  document.querySelector('.check-the-card-form-input-reader-name').disabled = true;
  document.querySelector('.check-the-card-form-input-card-number').value = localStorage.getItem('cardNumber');
  document.querySelector('.check-the-card-form-input-card-number').disabled = true;
  document.querySelector('.btn-check-the-card').style.display = 'none';
  document.querySelector('.check-the-card-btn-wrapper').innerHTML = `<ul class="check-the-card-list">
    <li class="check-the-card-list-item">
      <span class="check-the-card-list-item-name">Visits</span>
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M10.5 10C13.2614 10 15.5 7.76142 15.5 5C15.5 2.23858 13.2614 0 10.5 0C7.73858 0 5.5 2.23858 5.5 5C5.5 7.76142 7.73858 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5L0.5 21C0.5 18.3478 1.55357 15.8043 3.42893 13.9289C5.3043 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z"
          fill="#BB945F" />
      </svg>
      <span class="check-the-card-list-count check-the-card-list-visits-count">${localStorage.getItem('visits')}</span>
    </li>
    <li class="check-the-card-list-item">
      <span class="check-the-card-list-item-name">Bonuses</span>
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/>
        </svg>
      <span class="check-the-card-list-count check-the-card-list-bonuses-count">1240</span>
    </li>
    <li class="check-the-card-list-item">
      <span class="check-the-card-list-item-name">Books</span>
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="21" fill="#BB945F"/>
        <rect x="2" width="1" height="19" fill="#826844"/>
        <rect x="1" width="1" height="21" fill="white"/>
        </svg>
      <span class="check-the-card-list-count check-the-card-list-books-count">${localStorage.getItem('booksCount')}</span>
    </li>
  </ul>`;

  document.querySelector('.btn-sign-up').style.display = 'none';
  document.querySelector('.btn-log-in').innerHTML = 'Profile';
  document.querySelector('.btn-log-in').setAttribute('data-path', 'my-profile');

  myProfileUserName.textContent = localStorage.getItem('userName') + ' ' + localStorage.getItem('userSurname');
  myProfileInitials.textContent = localStorage.getItem('userName').slice(0, 1).toUpperCase() + localStorage.getItem('userSurname').slice(0, 1).toUpperCase();
  visitsCount.textContent = localStorage.getItem('visits');
  booksCountText.textContent = localStorage.getItem('booksCount');
  cardNumberField.textContent = localStorage.getItem('cardNumber');
}

// Вход в учетную запись
const loginUser = document.querySelector('.login-form-btn-submit');
const loginEmail = document.querySelector('.login-form-input-email');
const loginPassword = document.querySelector('.login-form-input-password');

loginUser.addEventListener('click', () => {
  if (loginEmail.value.length > 0 && loginEmail.value == userEmail && loginPassword.value == userPassword) {
    localStorage.setItem('active', true);
    localStorage.setItem('visits', +localStorage.getItem('visits') + 1);
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
    event.preventDefault();
    location.reload();
  }
  location.reload();
})


// Выход из учетной записи
const logOut = document.querySelector('.log-out-btn');

logOut.addEventListener('click', () => {
  localStorage.setItem('active', false);
  location.reload();
})

// Карточка My Profile

// Скопировать Card Number
const copy = document.querySelector('.my-profile-card-number-copy');
// const cardNumberField = document.querySelector('.span-my-pofile-card-number');

copy.addEventListener('click', () => {
  navigator.clipboard.writeText(cardNumberField.textContent);
});

// Купить Library Card
document.querySelector('.buy-card-btn').addEventListener('click', () => {
  localStorage.setItem('buyCard', true);
  localStorage.setItem('booksCount', +localStorage.getItem('booksCount') + 1);
  modalOverlay.classList.remove('modal-overlay--visible');
  modals.forEach((el) => {
    el.classList.remove('modal--visible');
  });
  event.preventDefault();
  location.reload();
});

// Купить книгу
if (localStorage.getItem('active') == 'false' || localStorage.getItem('buyCard') == 'false') {
  document.querySelectorAll('.btn-buy').forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });

      // window.scrollTo({ top: 0, behavior: 'smooth' });

      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');
    });
  });
} else {
  document.querySelectorAll('.btn-buy').forEach((el) => {
    el.addEventListener('click', (e) => {
      // e.stopPropagation();
      // el.classList.add('btn-buy-hidden');
      localStorage.setItem('booksCount', +localStorage.getItem('booksCount') + 1);
      el.innerHTML = 'Own';
      el.setAttribute = 'disabled';
      el.classList.add('btn-own');
      el.classList.remove('btn-buy');

      const parent = event.target.closest('.favorites-box-item');
      const author = parent.dataset.author;
      const bookName = parent.dataset.book;

      let li = document.createElement('li');
      let span = document.createElement('span');

      li.textContent = bookName + ', ' + author;
      li.classList.add('my-profile-list-books-item');

      document.querySelector('.my-profile-list-books').prepend(li);

      event.preventDefault();
      location.reload();
    });
    // localStorage.setItem('booksCount', +localStorage.getItem('bookCount') + 1);
    //   event.preventDefault();
    // location.reload();
  });
}

