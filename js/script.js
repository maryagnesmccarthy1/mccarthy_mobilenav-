(function () {
  var btn      = document.querySelector('.menu-toggle');
  var nav      = document.getElementById('primary-nav');
  var backdrop = document.querySelector('.nav-backdrop');
  if (!btn || !nav || !backdrop) return;
  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
    backdrop.hidden = !open;
  }
  btn.addEventListener('click', function () {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });
  backdrop.addEventListener('click', function () { setOpen(false); });
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setOpen(false);
    }
  });
})();

