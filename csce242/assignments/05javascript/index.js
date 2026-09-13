const speechPanel = document.querySelector("#speech-panel");
const beverageSelect = document.querySelector("#beverage-select");
const beverageResult = document.querySelector("#beverage-result");
const stickerPanel = document.querySelector(".sticker-panel");
const sunButton = document.querySelector("#sun-button");

const showSpeech = () => {
	speechPanel.classList.toggle("is-active");
};

const showBeverage = () => {
	beverageResult.textContent = `${beverageSelect.value}: Nice Choice!`;
};

const addSticker = () => {
	stickerPanel.classList.add("has-sticker");
};

speechPanel.addEventListener("click", showSpeech);
beverageSelect.addEventListener("change", showBeverage);
sunButton.addEventListener("click", addSticker);
