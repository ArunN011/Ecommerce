
const links = document.querySelectorAll(".nav-link");

links.forEach(function(link) {
  link.addEventListener("click", function() {
    links.forEach(function(item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".custom-nav");
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});