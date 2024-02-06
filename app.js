// Récupération du DOM
kickBtn = document.querySelector(".kickBtn");
snareBtn = document.querySelector(".snareBtn");
hithatBtn = document.querySelector(".hithatBtn");
hightomBtn = document.querySelector(".hightomBtn");
midtomBtn = document.querySelector(".midtomBtn");
floortomBtn = document.querySelector(".floortomBtn");
crashBtn = document.querySelector(".crashBtn");
rideBtn = document.querySelector(".rideBtn");




// Mettre un event listener sur le click souris

function playSoundClickKick() {
	const audioElement = document.querySelector('audio[data-key="65"]');
	audioElement.currentTime = 0;
	audioElement.play();
};

kickBtn.addEventListener("click", playSoundClickKick);


function playSoundClickSnare() {
	const audioElement = document.querySelector('audio[data-key="90"]');
	audioElement.currentTime = 0;
	audioElement.play();
};

snareBtn.addEventListener("click", playSoundClickSnare);


function playSoundClickHithat() {
	const audioElement = document.querySelector('audio[data-key="69"]');
	audioElement.currentTime = 0;
	audioElement.play();
};

hithatBtn.addEventListener("click", playSoundClickHithat);

function playSoundClickHightom() {
	const audioElement = document.querySelector('audio[data-key="82"]');
	audioElement.currentTime = 0;
	audioElement.play();
};

hightomBtn.addEventListener("click", playSoundClickHightom);

function playSoundClickMidtom() {
	const audioElement = document.querySelector('audio[data-key="84"]');
	audioElement.currentTime = 0;
	audioElement.play();
};

midtomBtn.addEventListener("click", playSoundClickMidtom);

function playSoundClickFloortom() {
	const audioElement = document.querySelector('audio[data-key="89"]');
	audioElement.currentTime = 0;
	audioElement.play();
};

floortomBtn.addEventListener("click", playSoundClickFloortom);

function playSoundClickCrash() {
	const audioElement = document.querySelector('audio[data-key="85"]');
	audioElement.currentTime = 0;
	audioElement.play();
};

crashBtn.addEventListener("click", playSoundClickCrash);

function playSoundClickRide() {
	const audioElement = document.querySelector('audio[data-key="73"]');
	audioElement.currentTime = 0;
	audioElement.play();
};

rideBtn.addEventListener("click", playSoundClickRide);
// Trouver une méthode pour dynamiser l'entrée audio[data-key] et faire une seule fonction pour tous les clicks



// Mettre un event listener sur l'appui des touches du clavier 
{
    const playSound = e => {
		const keyCode = e.keyCode,
			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

		if(!keyElement) return;

		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
		audioElement.currentTime = 0;
		audioElement.play();

    	keyElement.classList.add(playingClass);
    };

    const removeKeyTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.classList.remove(playingClass)
	};


    const drumKeys = Array.from(document.querySelectorAll('.key'));

	drumKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});

    window.addEventListener('keydown', playSound);
};