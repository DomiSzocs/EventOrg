const organisersTextarea = document.getElementById('organisers-textarea');
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
const submitButton = document.getElementById('save-event-button');

const isValidDate = (d) => !Number.isNaN(Date.parse(d));

function setStartDateError(current, start) {
  if (current >= start) {
    document.getElementById('start-date-error').style.display = 'inline';
  } else {
    document.getElementById('start-date-error').style.display = 'none';
  }
}

function setEndDateError(start, end) {
  if (!isValidDate(end)) return;
  if (start > end) {
    document.getElementById('end-date-error').style.display = 'inline';
  } else {
    document.getElementById('end-date-error').style.display = 'none';
  }
}

function setSubmitButton(current, start, end) {
  if (!isValidDate(start)) return;
  if (!isValidDate(end)) return;
  if (current >= start || start > end) {
    document.getElementById('save-event-button').style.display = 'none';
  } else {
    document.getElementById('save-event-button').style.display = 'inline';
  }
}

function checkDates() {
  const current = new Date();
  current.setHours(0, 0, 0, 0);
  const start = new Date(startDate.value);
  start.setHours(0, 0, 0, 0);
  const end = new Date(endDate.value);
  end.setHours(0, 0, 0, 0);
  if (!isValidDate(start)) return;
  setStartDateError(current, start);
  setEndDateError(start, end);
  setSubmitButton(current, start, end);
}

organisersTextarea.addEventListener('click', () => {
  organisersTextarea.innerText = '';
});

submitButton.addEventListener('click', () => {
  organisersTextarea.innerText = '';
});

startDate.addEventListener('change', checkDates);
endDate.addEventListener('change', checkDates);
