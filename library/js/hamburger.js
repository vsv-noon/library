let menuToggle = document.querySelector(".menu-toggle");
let navigation = document.querySelector(".header-navigation");
let navigationBtn = document.querySelector(".menu-btn");
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
  navigationBtn.classList.toggle("active");
};