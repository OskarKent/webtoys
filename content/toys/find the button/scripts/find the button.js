const button = document.getElementById('button');
const soundEffects = document.getElementById('soundEffects');
alert("the button is invisible and you need to find it and click on it");
soundEffects.play();

const randomMove = () => {
	button.style.top = Math.floor(Math.random() * 100) + "%";
	button.style.bottom = Math.floor(Math.random() * 100) + "%";
	button.style.left = Math.floor(Math.random() * 100) + "%";
	button.style.right = Math.floor(Math.random() * 100) + "%";
}

randomMove();