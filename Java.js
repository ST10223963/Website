document.getElementById('menuToggle').addEventListener('click', function(){
  const nav = document.getElementById('mainNav');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', String(!expanded));
  if (nav.hasAttribute('hidden')) nav.removeAttribute('hidden'); else nav.setAttribute('hidden', '');
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
