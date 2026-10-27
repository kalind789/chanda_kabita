// Review carousel: Previous/Next buttons scroll the track by one card plus the gap.
// Swipe, trackpad and keyboard scrolling work natively on the track itself.
(function () {
  var track = document.querySelector('[data-carousel-track]');
  var prev = document.querySelector('[data-carousel-prev]');
  var next = document.querySelector('[data-carousel-next]');
  if (!track || !prev || !next) return;

  function stepWidth() {
    var card = track.querySelector('.review-card');
    var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
  }

  prev.addEventListener('click', function () {
    track.scrollBy({ left: -stepWidth(), behavior: 'smooth' });
  });

  next.addEventListener('click', function () {
    track.scrollBy({ left: stepWidth(), behavior: 'smooth' });
  });
})();
