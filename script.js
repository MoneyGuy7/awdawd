// Mobile nav toggle
var t = document.querySelector('.menu-toggle'), l = document.querySelector('.nav ul');
if (t && l) t.addEventListener('click', function () {
  t.setAttribute('aria-expanded', l.classList.toggle('open'));
});
// Footer year
document.querySelectorAll('.yr').forEach(function (e) { e.textContent = new Date().getFullYear(); });
// Demo inquiry form: connect to Formspree / Netlify Forms before launch
var f = document.querySelector('form.inquiry');
if (f) f.addEventListener('submit', function (e) {
  e.preventDefault();
  f.style.display = 'none';
  document.querySelector('.thanks').style.display = 'block';
});
