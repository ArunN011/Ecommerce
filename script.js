
const slider = document.getElementById("productSlider");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

rightBtn.addEventListener("click", () => {
    slider.scrollLeft += 300;
});

leftBtn.addEventListener("click", () => {
    slider.scrollLeft -= 300;
});
