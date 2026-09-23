const destinations = {
	Mountains: {
		"Ashville": "https://www.google.com/maps?q=Ashville%2C+North+Carolina&output=embed",
		"Boone": "https://www.google.com/maps?q=Boone%2C+North+Carolina&output=embed",
		"Hot Springs": "https://www.google.com/maps?q=Hot+Springs%2C+North+Carolina&output=embed",
		"Table Rock": "https://www.google.com/maps?q=Table+Rock%2C+South+Carolina&output=embed"
	},
	Beaches: {
		"Folly Beach": "https://www.google.com/maps?q=Folly+Beach%2C+South+Carolina&output=embed",
		"Myrtle Beach": "https://www.google.com/maps?q=Myrtle+Beach%2C+South+Carolina&output=embed",
		"Hilton Head Island": "https://www.google.com/maps?q=Hilton+Head+Island%2C+South+Carolina&output=embed",
		"Kiawah Island": "https://www.google.com/maps?q=Kiawah+Island%2C+South+Carolina&output=embed"
	}
};

const destinationType = document.getElementById("destination-type");
const destinationList = document.getElementById("destination-list");
const mapContainer = document.getElementById("map-container");

const showMap = (destination, mapUrl) => {
	mapContainer.innerHTML = `
		<h3>${destination}</h3>
		<iframe
			src="${mapUrl}"
			title="Map showing ${destination}"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			allowfullscreen>
		</iframe>
	`;
};

const showDestinations = (type) => {
	destinationList.innerHTML = "";
	mapContainer.innerHTML = "";

	if (!type) {
		return;
	}

	Object.entries(destinations[type]).forEach(([destination, mapUrl]) => {
		const link = document.createElement("a");
		link.href = "#map-container";
		link.textContent = destination;
		link.addEventListener("click", (event) => {
			event.preventDefault();
			showMap(destination, mapUrl);
		});
		destinationList.appendChild(link);
	});
};

destinationType.addEventListener("change", (event) => {
	showDestinations(event.target.value);
});
