

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);  // 500ms for faster scroll
    }
  });
  // Toggle hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
  });



const openButton = document.getElementById("openbtn");
const popupForm  = document.getElementById("popupForm");
const closePopup  = document.getElementById("closePopup");


openButton.addEventListener("click", ()=> {
  popupForm.style.display = "flex"
})
console.log("everything is okay ")

closePopup.addEventListener('click', ()=> {
  popupForm.style.display = "none"
})

window.addEventListener('click', (event)=>{
if (event.target === popupForm ){
  popupForm.style.display = "none"
}
})
