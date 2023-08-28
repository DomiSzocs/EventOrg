/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
function allOnblur() {
  if (document.getElementById('csalad-nev').validity.valid
        && document.getElementById('kereszt-nev').validity.valid
        && document.getElementById('email').validity.valid
        && document.getElementById('datum').validity.valid
        && document.getElementById('url').validity.valid) {
    document.getElementById('bekuld').style.display = 'inline-block';
  } else {
    document.getElementById('bekuld').style.display = 'none';
  }
  document.getElementById('footer').innerHTML = `<center>${document.lastModified}</center>`;
}

function emailOnblur() {
  const val = document.form.email.value;
  const regex = /.*@gmail.com$|.*@yahoo.com$/;
  if (!(regex).test(val)) {
    document.form.email.setCustomValidity('Invalid Email');
    document.getElementById('email-validator').style.display = 'inline';
  } else {
    document.form.email.setCustomValidity('');
    document.getElementById('email-validator').style.display = 'none';
  }
  allOnblur();
}

function urlOnblur() {
  const { value } = document.getElementById('url');
  const regex = /^http[s]?:\/\/[\.\-\_A-Za-z0-9]*(\.[A-Za-z]*)(\.[A-Za-z]*)$/;
  if (!regex.test(value)) {
    document.getElementById('url').setCustomValidity('Invalid URL');
    document.getElementById('url-validator').style.display = 'inline';
  } else {
    document.getElementById('url').setCustomValidity('');
    document.getElementById('url-validator').style.display = 'none';
  }
  allOnblur();
}

function validatePassword() {
  const password = document.getElementById('jelszo').value;
  const regexSpecialChar = /^[a-zA-Z0-9\_]*[^a-zA-Z0-9\_][a-zA-Z0-9\_]*[^a-zA-Z0-9\_]?[a-zA-Z0-9\_]*$/;
  const regexChar = /(?=.*[0-9]+)(?=.*[a-z]+)(?=.*[A-Z]+)/;
  if (password.length >= 5 && password.length <= 12) {
    if (regexSpecialChar.test(password) || regexChar.test(password)) {
      document.getElementById('jelszo').setCustomValidity('');
    } else {
      // eslint-disable-next-line no-multi-str
      document.getElementById('jelszo').setCustomValidity('A jelszó pontosan 1 vagy 2 specialis karaktert tartalmazhat \
                                                            vagy legalább 1 nagybetüt és egy kisbetüt és egy számjegyet');
    }
  } else {
    document.getElementById('jelszo').setCustomValidity('A jelszó legalább 5 de, legfeljebb 12 karakter hosszú kell legyen');
  }
  console.log(password);
}

function startAnimation() {
  const element = document.getElementById('gorulo-szoveg');
  const direction = document.getElementById('irany').value;
  element.style.textAlign = direction;
  element.style.animationName = `toThe${direction}`;
  element.style.animationPlayState = 'running';
  element.style.animationDuration = '2s';
  element.style.animationIterationCount = 'infinite';
}

function changeGorduloSzoveg() {
  const { value } = document.getElementById('szoveg-doboz');
  let newValue = value;
  if (newValue.length !== 0) {
    while (newValue.length < 30) {
      newValue += newValue;
    }
  }
  document.getElementById('gorulo-szoveg').innerText = newValue;
  startAnimation();
}

function changeDirection() {
  startAnimation();
}

function restartAnimation() {
  const element = document.getElementById('gorulo-szoveg');
  const direction = document.getElementById('irany').value;
  element.style.textAlign = null;
  element.style.animationName = null;
  element.style.animationPlayState = null;
  element.style.animationDuration = null;
  element.style.animationIterationCount = null;
  // eslint-disable-next-line no-void
  void element.offsetWidth;
  startAnimation();
}
