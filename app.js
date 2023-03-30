// This function removes the 'playing' class from an element after the 'transitionend' event fires.
function removeTransition(e) {
  // Skip the function if the 'transitionend' event was not for a 'transform' property.
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

// This function plays a sound and adds the 'playing' class to the corresponding key.
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // Stop the function if the pressed key does not correspond to an audio file.
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

// Get all the key elements on the page and add a 'transitionend' event listener to each one.
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add a 'keydown' event listener to the window to trigger the playSound function when a key is pressed.
window.addEventListener('keydown', playSound);
