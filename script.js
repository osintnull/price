const elements = document.querySelectorAll(
  '.service-card, .pricing, .process-card, .intro, .contact'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all .7s cubic-bezier(.2,.7,.2,1)";
  observer.observe(el);
});


const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform =
      `translateY(-4px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
  });

});
