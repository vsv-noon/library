let menuToggle = document.querySelector(".menu-toggle");
let navigation = document.querySelector(".header-navigation");
let navigationBtn = document.querySelector(".menu-btn");
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
  navigationBtn.classList.toggle("active");
};

document.addEventListener("click", (el) => {
  if (!el.target.classList.contains("menu-toggle")) {
    navigation.classList.remove("active");
    navigationBtn.classList.remove("active");
  }
})