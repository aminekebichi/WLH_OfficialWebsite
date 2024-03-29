function slideLogosOut() {
    document.getElementById('logo1').style.transform = 'translateX(-120vw)';

    setTimeout(() => {
        document.getElementById('logo2').style.transform = 'translateX(-120vw)';
    }, 500);

    setTimeout(() => {
        document.getElementById('nav-logo').classList.add('nav-logo-transition');
        document.getElementById('nav-logo').style.paddingLeft = '0';
        document.getElementById('nav-logo').style.cursor = 'pointer';

        slideStoreOut();
    }, 5000);
}

function slideStoreOut() {
    document.getElementById('store').classList.add('transform-transition');
    document.getElementById('store').style.transform = 'translateX(0)';
}