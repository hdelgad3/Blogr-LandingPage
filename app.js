const toggleBtn = document.querySelector(".toggleBtn");
const headerMenu = document.querySelector(".headerMenu");
const menuTab = document.querySelectorAll(".menuTab");

// Toggle Menu when hamburger button clicked.
toggleBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("displayMenu");
  if(toggleBtn.children[0].src.match("/images/icon-hamburger.svg")) {
    toggleBtn.children[0].src = "/images/icon-close.svg";
  }
  else{
    toggleBtn.children[0].src = "/images/icon-hamburger.svg";
  }
});

// toggle links in tab
menuTab.forEach((tab) => {
  const btn = tab.querySelector(".menuBtn");
  // console.log(tab.children[1]);
  btn.addEventListener("click", () => {
    menuTab.forEach((item) => {
      // console.log(item)
      // console.log(tab)
      if (item != tab) {
        item.classList.remove("displayLinks");
      } 
    });
    tab.children[1].classList.toggle("displayLinks");
  });
});
