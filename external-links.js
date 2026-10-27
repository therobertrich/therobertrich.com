(function () {
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link || link.hostname === location.hostname) return;
    if (link.hostname === 'therobertrich.com' || link.hostname.endsWith('.therobertrich.com')) return;
    if (link.protocol !== 'https:' && link.protocol !== 'http:') return;
    var ok = window.confirm(
      'You are leaving therobertrich.com for ' + link.hostname + '.\n\n' +
      'Continue to ' + link.href + '?'
    );
    if (!ok) event.preventDefault();
  });
})();
