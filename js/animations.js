/* =====================
   REVEAL ON SCROLL
===================== */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

/* =====================
   NAVBAR SCROLL EFFECT
===================== */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.style.transform = 'translateY(-6px)';
    navbar.style.opacity = '0.95';
  } else {
    navbar.style.transform = 'translateY(0)';
    navbar.style.opacity = '1';
  }
});

/* =====================
   BUTTON MICRO INTERACTION
===================== */
document.querySelectorAll('.btn, .nav-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-2px)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0)';
  });
});
