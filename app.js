const toggleBtn = document.querySelector(".toggleBtn");
const headerMenu = document.querySelector(".headerLinks");
const headerBtns = document.querySelectorAll(".headerBtns");

toggleBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("showMenu");
});

for (let i = 0; i < headerBtns.length; i++) {
  headerBtns[i].addEventListener("click", () => {
    headerBtns[i].classList.toggle("MenuTabPanel");
  });
}
