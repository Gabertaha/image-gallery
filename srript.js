
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const paginationDots = document.querySelectorAll('.dot');
let slideInterval = setInterval(nextSlide, 3000);
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
    updatePagination();
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
    updatePagination();
}


function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = translateX(-${currentIndex * 100}%);
}


function updatePagination() {
    paginationDots.forEach(dot => dot.classList.remove('active'));
    paginationDots[currentIndex].classList.add('active');
}


document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});


document.querySelector('.slider').addEventListener('mouseout', () => {
    slideInterval = setInterval(nextSlide, 3000);
});


document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);


paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlidePosition();
        updatePagination();
    });
});

// Swipe functionality for touch devices
let touchStartX = 0;

document.querySelector('.slider').addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

document.querySelector('.slider').addEventListener('touchend', (e) => {
    let touchEndX = e.changedTouches[0].clientX;
    if (touchStartX > touchEndX + 50) {
        nextSlide();
    } else if (touchStartX < touchEndX - 50) {
        prevSlide();
    }
});