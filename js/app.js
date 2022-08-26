'use strict'


window.addEventListener('DOMContentLoaded', () => {

    //Бургер

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        menuOverlay = document.querySelector('.menu__overlay');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    menuOverlay.addEventListener('click', () => {
        menu.classList.remove('active');
    });


    //Показа подчеркиваний в навигации
    const menuList = document.querySelector('.header__nav-list');
    const underline = document.querySelectorAll('.underline');
    const menuElement = document.querySelectorAll('.header__nav-elem-a');

    function hideUnderline() {
        underline.forEach(item => {
            item.classList.add('underline_hide');
            item.classList.remove('underline_active')
        })
    }

    function showUnderline(i = 0) {
        underline[i].classList.add('underline_active');
        underline[i].classList.remove('underline_hide');
    }

    hideUnderline();
    showUnderline();

    menuList.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('header__nav-elem-a')) {
            menuElement.forEach((item, i) => {
                if (target == menuElement[i]) {
                    hideUnderline();
                    showUnderline(i);
                }
            })
        }
    })

    // Слайдер
    const dotWrapper = document.querySelector('.header__slider-dot');
    const dots = document.querySelectorAll('.header__slider-dot-item');
    const sliderContent = document.querySelectorAll('.header__slider-item');

    function hideSliderContent() {
        sliderContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })

        dots.forEach(item => {
            item.classList.remove('active-dot');
        })
    }

    function showSliderContent(i = 0) {
        sliderContent[i].classList.add('show', 'fade');
        sliderContent[i].classList.remove('hide');
        dots[i].classList.add('active-dot');
    }

    hideSliderContent();
    showSliderContent();

    dotWrapper.addEventListener('click', (event) => {
        const target = event.target;
        console.log(target);
        if (target && target.classList.contains('header__slider-dot-item')) {
            dots.forEach((item, i) => {
                if (target == item) {
                    hideSliderContent();
                    showSliderContent(i);
                }
            })
        }
    })

    //Video
    const video = document.querySelector('.video');
    const playBtn = document.querySelector('.controls__play');
    const stopBtn = document.querySelector('.controls__stop');

    function hideControlPlay() {
        playBtn.classList.add('hide');
        playBtn.classList.remove('show', 'fade');
    }

    function showControlPlay() {
        playBtn.classList.remove('hide');
        playBtn.classList.add('show', 'fade');
    }

    function hideControlStop() {
        stopBtn.classList.add('hide');
        stopBtn.classList.remove('show', 'fade');
    }

    function showControlStop() {
        stopBtn.classList.remove('hide');
        stopBtn.classList.add('show', 'fade');
    }

    showControlPlay();
    hideControlStop();


    playBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            hideControlPlay();
            showControlStop();
        }
    });

    stopBtn.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            hideControlStop();
            showControlPlay();
        }
    });

});