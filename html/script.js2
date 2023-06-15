var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessInput = document.getElementById('guess');
var checkButton = document.getElementById('check');
var message = document.getElementById('message');

checkButton.addEventListener('click', checkGuess);

function checkGuess() {
  var userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = '請輸入1到100之間的數字。';
  } else if (userGuess === randomNumber) {
    message.textContent = '恭喜你！猜對了！';
    disableInputAndButton();
  } else if (userGuess < randomNumber) {
    message.textContent = '太低了，再試一次。';
  } else {
    message.textContent = '太高了，再試一次。';
  }

  guessInput.value = '';
  guessInput.focus();
}

function disableInputAndButton() {
  guessInput.disabled = true;
  checkButton.disabled = true;
}
