'use strict'

window.addEventListener('DOMContentLoaded', () => {

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
            console.log('123');
            dots.forEach((item, i) => {
                if (target == item) {
                    hideSliderContent();
                    showSliderContent(i);
                }
            })
        }
    })

});