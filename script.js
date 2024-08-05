document.addEventListener("DOMContentLoaded", function() {

    var signupLink = document.querySelector(".signuppage a");
    var popup = document.getElementById("signup-popup");
    var closePopupButton = document.querySelector(".close-popup");
    var closeButton = document.querySelector(".signuppage button");
    var signupPage = document.querySelector(".signuppage");

    signupLink.addEventListener("click", function(event) {
        event.preventDefault();
        popup.style.display = "flex";
    });

    closePopupButton.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    closeButton.addEventListener("click", function() {
        signupPage.style.display = "none";
    });

    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const container = document.querySelector(".container");

    signInBtn.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });

    signUpBtn.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });

    // Переменные для слайдера
    const slides = document.querySelectorAll('.right-slide');
    const slider = document.querySelector('.right-slider');
    const timerInner = document.querySelector('.timer-inner');
    const slideCount = slides.length;
    const intervalTime = 3000; 
    const timerDuration = 3000; 

    let currentIndex = 0;
    let timer;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            showNextSlide();
            resetTimer();
        }, intervalTime);
    }

    function resetTimer() {
        timerInner.style.transition = 'none'; 
        timerInner.style.width = '0%'; 
        
        void timerInner.offsetWidth; 
        timerInner.style.transition = `width ${timerDuration}ms linear`; 
        timerInner.style.width = '100%'; 
    }

    function startSlider() {
        startTimer(); 
    }

    startSlider();

    // Переменные для генерации отзывов
    const names = Array(10).fill("Alex K.");
    const ratings = Array(10).fill(5);
    const reviews = Array(10).fill("Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and styles.");

    function createStars(rating) {
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '★';
        }
        return stars;
    }

    function generateReviewHTML(name, rating, review) {
        return `
            <div class="slide">
                <div class="stars"><p>${createStars(rating)}</p></div>
                <div><strong>${name}</strong></div>
                <div><h5>${review}</h5></div>
            </div>
        `;
    }

    const reviewSlider = document.getElementById('reviewSlider');
    names.forEach((name, index) => {
        const rating = ratings[index];
        const review = reviews[index];
        reviewSlider.innerHTML += generateReviewHTML(name, rating, review);
    });

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => {
        reviewSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        reviewSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
});
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
  }