document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 3000; // 3 seconds

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = currentIndex * slider.clientWidth;
        slider.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    }

    setInterval(autoSlide, intervalTime);
});