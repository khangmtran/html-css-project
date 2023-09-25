const menu_btn = document.querySelector('.hamburger');
const mobile_menu_box = document.querySelector('.nav_box');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu_box.classList.toggle('is-active');
});

document.addEventListener('click', function (event) {
    const isClickInsideMenu = menu_btn.contains(event.target);
    const isClickInsideNavBox = mobile_menu_box.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideNavBox && mobile_menu_box.classList.contains('is-active')) {
        menu_btn.classList.remove('is-active');
        mobile_menu_box.classList.remove('is-active');
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        menu_btn.classList.remove('is-active');
        mobile_menu_box.classList.remove('is-active');
    }
});

