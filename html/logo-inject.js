// inject logo.html into every page (requires server)
(function(){
  function insertLogo(html){
    var anchor = document.getElementById('site-logo-anchor');
    if (!anchor) {
      anchor = document.createElement('div');
      anchor.id = 'site-logo-anchor';
      document.body.insertBefore(anchor, document.body.firstChild);
    }
    anchor.innerHTML = html;
    var logo = document.getElementById('siteLogo');
    if (logo) {
      logo.addEventListener('click', function(){ window.location.href = 'index.html'; });
      logo.setAttribute('tabindex','0');
      logo.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); logo.click(); }});
    }
  }

  fetch('logo.html')
    .then(r => r.text())
    .then(insertLogo)
    .catch(function(err){
      console.warn('logo.html không load được (đang chạy từ file://?). Fall back: nothing.', err);
    });
})();
