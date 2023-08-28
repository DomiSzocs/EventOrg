const deadline = document.getElementById('deadline');
const submitButton = document.getElementById('save-task-button');

const isValidDate = (d) => !Number.isNaN(Date.parse(d));

function setStartDateError(current, start) {
  if (current >= start) {
    document.getElementById('deadline-error').style.display = 'inline';
  } else {
    document.getElementById('deadline-error').style.display = 'none';
  }
}

function setSubmitButton(current, end) {
  if (!isValidDate(end)) return;
  if (current >= end) {
    submitButton.style.display = 'none';
  } else {
    submitButton.style.display = 'inline';
  }
}

function checkDates() {
  const current = new Date();
  current.setHours(0, 0, 0, 0);
  const end = new Date(deadline.value);
  end.setHours(0, 0, 0, 0);
  if (!isValidDate(end)) return;
  setStartDateError(current, end);
  setSubmitButton(current, end);
}

deadline.addEventListener('change', checkDates);
