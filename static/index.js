const listedItems = document.getElementsByClassName('listed-event');
const buttons = document.getElementsByClassName('join-or-leave-button');
const username = document.getElementById('logged-in').innerText;
const filter = document.getElementById('filter');

async function showMore(name) {
  try {
    const result = await fetch(`/api/${name}`);
    const response = await result.json();

    if (result.status !== 204 && result.status !== 200) {
      document.getElementById(`error-handler-${name}`).style.display = 'block';
      document.getElementById(`error-handler-${name}`).innerHTML = response.response;
      return;
    }

    let organiserList = '';
    if (response.organisers.length === 0) {
      organiserList += 'No organisers yet!';
    } else {
      response.organisers.forEach((organiser) => {
        organiserList += `${organiser.Username}\n`;
      });
    }
    document.getElementById(`organiser-text-${name}`).style.display = 'block';
    document.getElementById(`organisers-${name}`).style.display = 'block';
    document.getElementById(`organisers-${name}`).innerText = organiserList;
    let buttonText = '';
    const includes = (organiser) => organiser.Username === username;
    if (response.organisers.some(includes)) {
      buttonText = 'Leave Event';
    } else {
      buttonText = 'Join Event';
    }
    const joinOrLeaveButton = document.getElementById(`join-or-leave-button-${name}`);
    if (joinOrLeaveButton) {
      joinOrLeaveButton.style.display = 'inline-block';
      joinOrLeaveButton.innerText = buttonText;
    }
  } catch (err) {
    document.getElementById(`error-handler-${name}`).style.display = 'block';
    document.getElementById(`error-handler-${name}`).innerHTML = err;
  }
}

async function joinOrLeave(event, button) {
  event.stopPropagation();
  const splitedPath = button.id.split('-');
  const eventName = splitedPath[splitedPath.length - 1];
  const path = button.outerText.toLowerCase().split(' ')[0];
  const fullPath = `/api/${path}/${eventName}/${username}`;
  try {
    const result = await fetch(fullPath);
    if (result.status === 204 || result.status === 200) {
      await showMore(eventName);
    } else {
      const response = await result.json();
      document.getElementById(`error-handler-${eventName}`).style.display = 'block';
      document.getElementById(`error-handler-${eventName}`).innerHTML = response.response;
    }
  } catch (err) {
    document.getElementById(`error-handler-${eventName}`).style.display = 'block';
    document.getElementById(`error-handler-${eventName}`).innerHTML = err;
  }
}

async function filterEvents() {
  if (filter.checked) {
    [].map.call(listedItems, async (event) => {
      const block = event;
      block.style.display = 'none';
    });
    const result = await fetch('/api/myEvents');
    const response = await result.json();
    [].map.call(response.events, (event) => {
      document.getElementById(event.EventName).style.display = 'block';
    });
  } else {
    [].map.call(listedItems, async (event) => {
      const block = event;
      block.style.display = 'block';
    });
  }
}

[].forEach.call(buttons, (button) => button.addEventListener('click', (event) => joinOrLeave(event, button)));
[].forEach.call(listedItems, (listedItem) => listedItem.addEventListener('click', () => showMore(listedItem.childNodes[1].text)));
filter.addEventListener('change', filterEvents);
