// ====== Confetti Generator ======
const confettiContainer = document.querySelector('.confetti');

// create random confetti pieces
for (let i = 0; i < 80; i++) {
  const confetto = document.createElement('div');
  confetto.classList.add('confetto');
  confetto.style.left = Math.random() * 100 + 'vw';
  confetto.style.animationDuration = 3 + Math.random() * 3 + 's';
  confetto.style.backgroundColor = randomColor();
  confettiContainer.appendChild(confetto);
}

// random pastel color function
function randomColor() {
  const colors = ['#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF', '#FBC4AB', '#FFD6A5'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// ====== Animation Styling ======
const style = document.createElement('style');
style.textContent = `
  .confetto {
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.8;
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes fall {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(110vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);
