// mobile nav
const toggle = document.querySelector('.menu-toggle');
const list = document.querySelector('.nav ul');
if (toggle && list) {
  toggle.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// footer year
document.querySelectorAll('.yr').forEach(el => el.textContent = new Date().getFullYear());

// menu tabs (supports #hash links)
const tabs = document.querySelectorAll('.tabs [role="tab"]');
function showTab(id) {
  tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.t === id));
  document.querySelectorAll('.tabpanel').forEach(p => p.classList.toggle('show', p.id === id));
}
if (tabs.length) {
  tabs.forEach(t => t.addEventListener('click', () => {
    showTab(t.dataset.t);
    history.replaceState(null, '', '#' + t.dataset.t);
  }));
  const h = location.hash.slice(1);
  if (h && document.getElementById(h)) showTab(h);
}

// scroll reveal
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 })
  : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

// demo inquiry form (wire to real email/form service before launch)
const form = document.querySelector('form.inquiry');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    document.querySelector('.thanks').style.display = 'block';
  });
}
