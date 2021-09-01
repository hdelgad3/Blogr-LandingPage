const toggleBtn = document.querySelector(".toggleBtn");
const headerMenu = document.querySelector(".headerLinks");
const headerBtns = document.querySelectorAll(".headerBtns");

toggleBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("showMenu");
});
//idk lol
for (let i = 0; i < headerBtns.length; i++) {
  headerBtns[i].addEventListener("click", () => {
    headerBtns[i].classList.toggle("MenuTabPanel");
    headerBtns[i].style.content = "/images/icon-arrow-light.svg";
    let menuTabs = headerBtns[i].nextElementSibling;
    if (menuTabs.style.display === "none") {
      console.log("display is none");
      menuTabs.style.display = "block";
    } else {
      menuTabs.style.display = "none";
      console.log("display is not none");
    }
  });
}
