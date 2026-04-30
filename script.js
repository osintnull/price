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
  observer.observe(el);
});

const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    if (!card.classList.contains('visible')) return;

    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      translateY(0)
      rotateX(${y * -4}deg)
      rotateY(${x * 4}deg)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
  });
});
