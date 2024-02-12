
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {

  button.addEventListener('click', function (change) {
    
    if (change.target.id === 'pink') {
        body.style.backgroundColor = change.target.id;
      }
      if (change.target.id === 'green') {
        body.style.backgroundColor = change.target.id;
      }

    if (change.target.id === 'grey') {
      body.style.backgroundColor = change.target.id;
    }
    if (change.target.id === 'white') {
      body.style.backgroundColor = change.target.id;
    }
    if (change.target.id === 'blue') {
      body.style.backgroundColor = change.target.id;
    }
    if (change.target.id === 'yellow') {
      body.style.backgroundColor = change.target.id;
    }
    button.stopPropagation()
  },false);
});

