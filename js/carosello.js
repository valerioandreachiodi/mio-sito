    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function changeSlide() {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }

    // Cambia immagine automaticamente ogni 5 secondi
    setInterval(changeSlide, 5000);
