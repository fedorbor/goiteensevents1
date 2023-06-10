const listel = document.querySelector(".js-tags");



const fn = (event) => {

if (event.target.nodeName = "BUTTON")

return

event.target.classList.toggle("tags_btn--active");

listel.addEventtListener("click", fn)}