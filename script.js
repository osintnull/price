const elements = document.querySelectorAll(
  '.service-card, .pricing, .process-card, .intro, .contact'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => {
  el.classList.add('hidden-start');
  observer.observe(el);
});

const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty('--rx', `${y * -4}deg`);
    card.style.setProperty('--ry', `${x * 4}deg`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  });

});
