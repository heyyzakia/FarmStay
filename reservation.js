const form = document.getElementById('reservationForm');
const confirmMsg = document.getElementById('resConfirm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('.res-submit');
    submitBtn.textContent = 'Reserving...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Table Reserved ✓';
      confirmMsg.classList.add('show');
      form.reset();
      setTimeout(() => {
        submitBtn.textContent = 'Reserve Table';
        submitBtn.disabled = false;
      }, 2200);
    }, 900);
  });
}
