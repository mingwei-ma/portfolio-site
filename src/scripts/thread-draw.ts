// Draws .thread (loop marks, thread rules) and .journey lines on scroll into view.
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

  const journey = document.querySelector('.journey');
  if (journey) {
    if (reduce) {
      journey.classList.add('drawn');
    } else {
      const journeyIo = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              journey.classList.add('drawn');
              journeyIo.disconnect();
            }
          }
        },
        { threshold: 0.35 }
      );
      journeyIo.observe(journey);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThreadDraw);
} else {
  initThreadDraw();
}
