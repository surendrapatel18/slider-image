
const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dots = document.querySelectorAll('.pagination .dot');
let currentIndex = 0;
let interval;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function autoSlide() {
    interval = setInterval(() => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }, 3000); 
}

prev.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
    clearInterval(interval);
    autoSlide();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
    clearInterval(interval); 
    autoSlide();
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        currentIndex = index;
        showSlide(currentIndex);
        clearInterval(interval); 
        autoSlide();
    });
});


showSlide(currentIndex);
autoSlide();
