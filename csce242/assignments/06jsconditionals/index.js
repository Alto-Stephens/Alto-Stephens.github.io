const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const exerciseLinks = document.querySelectorAll(".main-nav a");
const exercisePanels = document.querySelectorAll(".exercise-panel");
const missedDaysInput = document.getElementById("missed-days");
const attendanceResult = document.getElementById("attendance-result");

const showExercise = (exerciseId) => {
	exercisePanels.forEach((panel) => {
		panel.classList.toggle("hidden", panel.id !== exerciseId);
	});
};

const updateAttendanceResult = () => {
	const missedDays = Number(missedDaysInput.value);

	if (!Number.isFinite(missedDays) || missedDays < 0) {
		attendanceResult.textContent = "Enter a valid number of missed days.";
		return;
	}

	const classesPerSemester = 25;
	const attendanceWeight = 7;
	const deduction = Math.min(missedDays, classesPerSemester) / classesPerSemester * attendanceWeight;
	const roundedDeduction = deduction.toFixed(1);

	if (missedDays === 0) {
		attendanceResult.textContent = "Perfect attendance keeps all 7% of your attendance grade.";
	} else if (missedDays <= 2) {
		attendanceResult.textContent = `You will lose ${roundedDeduction}% for missing ${missedDays} day${missedDays === 1 ? "" : "s"}. Keep it up!`;
	} else if (missedDays <= 5) {
		attendanceResult.textContent = `You will lose ${roundedDeduction}% for missing ${missedDays} days. Try to protect your attendance grade.`;
	} else {
		attendanceResult.textContent = `You will lose ${roundedDeduction}% for missing ${missedDays} days. That is a lot of valuable class time!`;
	}
};

const getSemesterEnd = () => {
	const today = new Date();
	let semesterEnd = new Date(today.getFullYear(), 11, 4);

	if (semesterEnd < today) {
		semesterEnd = new Date(today.getFullYear() + 1, 11, 4);
	}

	return semesterEnd;
};

const updateSemesterResult = () => {
	const today = new Date();
	const semesterEnd = getSemesterEnd();
	const daysLeft = Math.max(0, Math.ceil((semesterEnd - today) / (1000 * 60 * 60 * 24)));
	const semesterResult = document.getElementById("semester-result");
	const semesterMessage = document.getElementById("semester-message");

	semesterResult.textContent = `You have ${daysLeft} days left in the semester.`;

	if (daysLeft > 100) {
		semesterMessage.textContent = "There is plenty of time to make this semester count.";
	} else if (daysLeft > 30) {
		semesterMessage.textContent = "The finish line is coming into view. Keep going!";
	} else if (daysLeft > 0) {
		semesterMessage.textContent = "Final stretch! Finish strong.";
	} else {
		semesterMessage.textContent = "The semester has ended. Enjoy your break!";
	}
};

menuToggle.addEventListener("click", () => {
	const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
	menuToggle.setAttribute("aria-expanded", String(!isOpen));
	mainNav.classList.toggle("is-open", !isOpen);
});

exerciseLinks.forEach((link) => {
	link.addEventListener("click", () => {
		showExercise(link.getAttribute("href").slice(1));
		if (window.innerWidth <= 600) {
			menuToggle.setAttribute("aria-expanded", "false");
			mainNav.classList.remove("is-open");
		}
	});
});

missedDaysInput.addEventListener("input", updateAttendanceResult);
updateSemesterResult();
