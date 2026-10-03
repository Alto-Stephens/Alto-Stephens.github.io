class Vacation {
	constructor(title, type, description, activities, image, mapSrc) {
		this.title = title;
		this.type = type;
		this.description = description;
		this.activities = activities;
		this.image = image;
		this.mapSrc = mapSrc;
	}

	getCard() {
		const card = document.createElement("section");
		card.className = "vacation-card";

		const button = document.createElement("button");
		button.className = "vacation-card-button";
		button.type = "button";
		button.setAttribute("aria-label", `View ${this.title} vacation details`);
		button.innerHTML = `
			<span class="card-heading">
				<span class="card-title">${this.title}</span>
				<span class="card-type">${this.type} Vacation</span>
			</span>
			<img src="${this.image}" alt="Scenic view of ${this.title}" loading="lazy" />
		`;
		button.addEventListener("click", () => this.showDetails());
		card.appendChild(button);
		return card;
	}

	showDetails() {
		dialogTitle.textContent = this.title;
		dialogType.textContent = `${this.type} Vacation`;
		dialogDescription.textContent = this.description;
		dialogActivities.textContent = this.activities;
		dialogMap.src = this.mapSrc;
		vacationDialog.showModal();
	}
}

const vacations = [
	new Vacation("Asheville", "Mountain", "A lively mountain city known for its Blue Ridge views, historic architecture, and creative food scene.", "Explore the River Arts District, tour the Biltmore Estate, or take a scenic drive on the Blue Ridge Parkway.", "images/ashville.jpg", "https://www.google.com/maps?q=Asheville%2C+North+Carolina&output=embed"),
	new Vacation("Boone", "Mountain", "A scenic college town in the Blue Ridge Mountains with beautiful hiking trails and a welcoming downtown.", "Visit Appalachian State University, hike Grandfather Mountain, or browse King Street shops.", "images/boone.jpg", "https://www.google.com/maps?q=Boone%2C+North+Carolina&output=embed"),
	new Vacation("Hot Springs", "Mountain", "A quiet mountain village where the Appalachian Trail meets the French Broad River.", "Soak in the mineral hot springs, hike a section of the Appalachian Trail, or paddle the river.", "images/hotsprings.jpg", "https://www.google.com/maps?q=Hot+Springs%2C+North+Carolina&output=embed"),
	new Vacation("Table Rock", "Mountain", "A dramatic granite summit in a forested state park in the heart of the Blue Ridge foothills.", "Hike to the summit, picnic beneath the cliffs, or explore nearby trails in the state park.", "images/tablerock.jpg", "https://www.google.com/maps?q=Table+Rock+State+Park%2C+South+Carolina&output=embed"),
	new Vacation("Sunset Beach", "Beach", "A peaceful barrier island with a broad sandy shoreline and beautiful Atlantic sunsets.", "Walk the Kindred Spirit Mailbox trail, visit the pier, or watch the sun set over the water.", "images/sunsetbeach.png", "https://www.google.com/maps?q=Sunset+Beach%2C+North+Carolina&output=embed"),
	new Vacation("Edisto Beach", "Beach", "A relaxed coastal escape known for maritime forests, quiet beaches, and a slower pace.", "Explore Edisto Beach State Park, look for shells, or bike beneath the live oaks.", "images/edistobeach.jpg", "https://www.google.com/maps?q=Edisto+Beach%2C+South+Carolina&output=embed"),
	new Vacation("Oak Island", "Beach", "A laid-back island retreat with long beaches, a historic lighthouse, and family-friendly charm.", "Climb Oak Island Lighthouse, fish from the pier, or spend the day on the beach.", "images/oakisland.jpg", "https://www.google.com/maps?q=Oak+Island%2C+North+Carolina&output=embed"),
	new Vacation("Pawleys Island", "Beach", "A charming Lowcountry beach town with wide dunes, salt marshes, and a storied island history.", "Relax on the beach, explore the Hammock Shops, or kayak through the salt marsh.", "images/pawleysisland.jpg", "https://www.google.com/maps?q=Pawleys+Island%2C+South+Carolina&output=embed")
];

const vacationGallery = document.getElementById("vacation-gallery");
const vacationDialog = document.getElementById("vacation-dialog");
const dialogTitle = document.getElementById("dialog-title");
const dialogType = document.getElementById("dialog-type");
const dialogDescription = document.getElementById("dialog-description");
const dialogActivities = document.getElementById("dialog-activities");
const dialogMap = document.getElementById("dialog-map");

vacations.forEach((vacation) => vacationGallery.appendChild(vacation.getCard()));

document.querySelector(".dialog-close").addEventListener("click", () => vacationDialog.close());
vacationDialog.addEventListener("click", (event) => {
	if (event.target === vacationDialog) {
		vacationDialog.close();
	}
});
