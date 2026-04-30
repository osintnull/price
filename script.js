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
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));

document.querySelectorAll('.service-card').forEach(card => {
  const inner = card.querySelector('.service-card-inner');

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    inner.style.transform = `
      rotateX(${y * -4}deg)
      rotateY(${x * 4}deg)
    `;
  });

  card.addEventListener('mouseleave', () => {
    inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
