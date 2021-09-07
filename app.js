const toggleBtn = document.querySelector(".toggleBtn");
const headerMenu = document.querySelector(".headerMenu");
const menuTab = document.querySelectorAll(".menuTab");

toggleBtn.addEventListener('click', ()=>{
 headerMenu.classList.toggle('displayMenu');
})
