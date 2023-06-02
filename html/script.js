document.addEventListener('keydown', jump);

function jump(event) {
  var dino = document.getElementById('dino');
  if (event.keyCode === 32) {
    dino.classList.add('jump-animation');
    setTimeout(function() {
      dino.classList.remove('jump-animation');
    }, 500);
  }
}