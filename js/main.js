// JavaScript Document

(() => {
	// variables at the top -> elemtns on the page we need to work with
	let profileButtons = document.querySelectorAll('.profiles div'),
		name = document.querySelector('#name'),
		details = document.querySelector('#details')
		// this will go and get the buttons at the bottom and create a NODE LIST
		lightBox = document.querySelector('.lightbox'),
		closeLightBox = lightBox.querySelector(".lightbox-close");


		names = ['Spencer', 'Jordan', 'Tessa']
		description = ['Spencer Mellor, also known as the CEO and founder of Dynamic 3. Spencer is currently a full time student at Fanshawe College in the Interactive Media Design program which teaches you to build interative websites just like this! He also enjoys long walks on the beach, horse back rides, and sunsets! What a hunk!','Jordan Andrigo - co-founder and creator of Dynamic 3. She is a full time home body, professional cat lady, and she makes a mean caesar. Jordan is currently in her first year of Interactive Media Design at Fanshawe College in downtown London, Ontario and is looking forward to learning more about the web.','tessas info']

	// events go in the middle
	function showLightBox() {
		//pop open a lightbox here and show some content
		// start with a video
		//debugger;

		lightBox.classList.add('show-lightbox');

	if (this.id == "spencer") {
		name.innerHTML = names[0]
		details.innerHTML = description[0]
	} else if (this.id == "jordan"){
		name.innerHTML = names[1]
		details.innerHTML = description[1]
	} else if (this.id == "tessa") {
		name.innerHTML = names[2]
		details.innerHTML = description[2]
	}

	}

	function hideLightBox() {
		lightBox.classList.remove("show-lightbox");
	}


		// add a click event to the sigilButtons
		profileButtons.forEach(button => button.addEventListener("click", showLightBox))

		// add an event handler for the lightbox close button

		closeLightBox.addEventListener("click", hideLightBox)

})();
