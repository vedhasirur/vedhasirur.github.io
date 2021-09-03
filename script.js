const text = document.querySelector(".text");
const secretDiv = document.querySelector('.secret-div');

const keys = [];
const secretCode = ["c", "o", "o", "l"];

const confettiSettings = { target: 'my-canvas', size: 1.4, max: 150 };
const confetti = new ConfettiGenerator(confettiSettings);

function keysDetector(e) {

	console.log(e.key); //check which key got pressed in the console
	
  keys.push(e.key);
  if (keys.length > secretCode.length) {
		keys.shift()
	}

  if (JSON.stringify(keys) === JSON.stringify(secretCode)) {
		secretDiv.style.display = "block";
		text.innerHTML = "Identity Verified!"
		confetti.render();
		anime({
			targets: 'body',
			rotate: '1turn',
			backgroundColor: '#fcba03',
			duration: 2000
		});
  }
	
}

window.addEventListener('keyup', keysDetector);
window.onclick = () => { alert("hehehehhehehehehhehehehehhe you clicked it bad child");}
