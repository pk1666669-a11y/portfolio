// Hero Image Load
document.addEventListener('DOMContentLoaded', () => {
    const heroImg = document.getElementById('hero-img');
    if(heroImg) {
        heroImg.src = 'images/prashant.jpg';
    }

    // Smooth Scroll for Navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
