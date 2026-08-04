// Draws .thread (loop marks, thread rules) on scroll into view. The Home page's
// journey carousel handles its own reveal (see JourneyCarousel.astro).
// Respects prefers-reduced-motion by applying the end state instantly.
function initThreadDraw() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const threadIo = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('drawn');
          threadIo.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.thread').forEach((el) => {
    if (reduce) {
      el.classList.add('drawn');
    } else {
      threadIo.observe(el);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThreadDraw);
} else {
  initThreadDraw();
}
