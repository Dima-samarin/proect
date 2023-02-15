
const header = document.querySelector('.header__bottom');
const intro = document.querySelector('.intro');
const headerHeight = header.offsetHeight;
const firstHeight = intro.offsetHeight;


window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= firstHeight + headerHeight) {
        header.classList.add('header--fixed');
        intro.style.marginTop = `${headerHeight}px`;
    } else {
        header.classList.remove('header--fixed');
        intro.style.marginTop = null;
    }
});

$('.nav__link').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top - headerHeight
    }, {
        duration: 700,
        easing: "linear"
    });
    return false;
});
