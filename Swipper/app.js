const swiper = new Swiper('.mySwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
});

    const images = document.querySelectorAll('.grid .imag img');
    images.forEach((img, index) => {
    img.addEventListener('click', () => {
        swiper.slideTo(index); 
    });
});


