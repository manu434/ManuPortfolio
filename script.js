// Highlight active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar .nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('#navbar .nav-links');

mobileMenu.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});