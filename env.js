(function () {
  // Both branches deploy the same files; show beta-only content on the beta host.
  if (location.hostname !== 'beta.therobertrich.com') return;
  document.querySelectorAll('[data-beta-only]').forEach(function (el) {
    el.hidden = false;
  });
})();
