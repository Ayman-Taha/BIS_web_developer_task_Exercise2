/*Declaring variables of controlled elements*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const draw = document.querySelector(".draw");
const playBtn = document.querySelector(".play-btn");
const okBtn = document.querySelector(".ok-button");

/*Showing the customized alert window*/
const openModal = function () {
	modal.classList.toggle("hidden");
	overlay.classList.toggle("hidden");
};

/*Hiding the customized alert window*/
const closeModal = function () {
	openModal();
	/*Reversing the style and content of play screen on closing the customized window*/
	draw.textContent = 0;
	playBtn.style.backgroundColor = "#DCDCDC";
	playBtn.style.borderColor = "#808080";
};

/*Changing style of play button when mouse is down*/
playBtn.addEventListener("mousedown", function () {
	this.style.backgroundColor = "#6495ED";
	this.style.borderColor = "#2593be";
});

/*Styling and Starting the game when play button is clicked*/
playBtn.addEventListener("mouseup", function () {
	this.style.backgroundColor = "#0FF";
	this.style.borderColor = "#2593be";

	/*using setInterval to shuffle through numbers on the screen*/
	let random;
	let timerID = setInterval(function () {
		random = Math.ceil(Math.random() * 100001);
		draw.textContent = random;
	}, 100);

	/*using setTimeout to stop shuffling numbers and open the customized window*/
	setTimeout(function () {
		clearInterval(timerID);
		document.querySelector(".result").textContent =
			random <= 1000 && random >= 1
				? "Awesome! You have won!"
				: "Too bad! You have lost!";
		openModal();
	}, 5000);
});

/*Changing ok button style on mouse down*/
okBtn.addEventListener("mousedown", function () {
	this.style.borderColor = "#808080";
});

/*Closing the customized window on either clicking ok or x buttons*/
okBtn.addEventListener("click", closeModal);
document.querySelector(".x-button").addEventListener("click", closeModal);
