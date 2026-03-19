const toggle = document.getElementById('nav-toggle');
const mobile = document.getElementById('nav-mobile');

toggle.addEventListener('click', () => {
  mobile.classList.toggle('open');
});

mobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobile.classList.remove('open'));
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll(
  '.project-card, .timeline-item, .skill-group, .detail-card, .contact-card'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
