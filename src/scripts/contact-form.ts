// Contact form submit handling — sends via Formspree.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjgnanor';

async function submitContactForm(formData: FormData): Promise<void> {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  });
  if (!res.ok) throw new Error(`Formspree responded with ${res.status}`);
}

function init() {
  const form = document.querySelector<HTMLFormElement>('#contact-form');
  const successPanel = document.querySelector<HTMLElement>('#contact-success');
  const errorEl = document.querySelector<HTMLElement>('#contact-error');
  if (!form || !successPanel) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorEl) errorEl.hidden = true;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const originalLabel = submitBtn?.textContent;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }

    try {
      await submitContactForm(new FormData(form));
      form.reset();
      form.hidden = true;
      successPanel.hidden = false;
    } catch {
      if (errorEl) errorEl.hidden = false;
    } finally {
      if (submitBtn && originalLabel) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
