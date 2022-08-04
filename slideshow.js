let images = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg","img/img7.jpg"];
const imgSlide = document.getElementById("slide");
let current_index = 0;

function changeImg() {
    if (current_index < images.length-1) {
        current_index += 1;
        imgSlide.src = images[current_index];
    } else {
        current_index = 0;
        imgSlide.src = images[current_index];
    }
}
