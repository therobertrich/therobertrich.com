(function () {
  // Both branches deploy the same files; switch content on the beta host.
  if (location.hostname !== 'beta.therobertrich.com') return;
  document.querySelectorAll('[data-beta-only]').forEach(function (el) {
    el.hidden = false;
  });
  document.querySelectorAll('[data-prod-only]').forEach(function (el) {
    el.hidden = true;
  });
})();
