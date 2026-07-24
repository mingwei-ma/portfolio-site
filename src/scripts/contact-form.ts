// Contact form submit handling.
//
// TODO(wire-backend): this currently only validates and shows the success
// state — no message is actually sent anywhere. To wire it up for real,
// replace the body of `submitContactForm` with one of:
//   - Formspree:  fetch(`https://formspree.io/f/YOUR_FORM_ID`, { method: 'POST', headers: { Accept: 'application/json' }, body: formData })
//   - Resend / a serverless function: fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } })
// and throw on a non-ok response so the error state below can catch it.
async function submitContactForm(formData: FormData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 400));
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
