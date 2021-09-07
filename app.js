const toggleBtn = document.querySelector(".toggleBtn");
const headerMenu = document.querySelector(".headerMenu");
const menuTab = document.querySelectorAll(".menuTab");

// Toggle Menu when hamburger button clicked.
toggleBtn.addEventListener('click', ()=>{
 headerMenu.classList.toggle('displayMenu');
})

// toggle links in tab
menuTab.forEach(tab=>{
  const btn = tab.querySelector('.menuBtn');
  btn.addEventListener('click', ()=>{
    menuTab.forEach(item=>{
      if(item != btn){
        item.classList.remove('displayLinks');
      }
    });
    tab.classList.toggle('displayLinks');
  });
});