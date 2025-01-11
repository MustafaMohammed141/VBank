//* ---- Scrolling ---- *//
const abtLnk = document.getElementById("abtLnk");
const homeBtn = document.getElementById("homeBtn");

abtLnk.addEventListener("click", function (event) {
	ScrollBtn(event, "aboutUs");
});
homeBtn.addEventListener("click", function (event) {
	ScrollBtn(event, "main");
});

function ScrollBtn(event, eId) {
	event.preventDefault();
	document.getElementById(eId).scrollIntoView({ behavior: "smooth" });
}
//* ---- Hidding ---- *//
const mainSec = document.getElementById("main");

window.addEventListener("scroll", function () {
	const triggerPosition = mainSec.offsetHeight / 2;

	if (window.scrollY >= triggerPosition) {
		homeBtn.style.transform = "scale(1)";
	} else {
		homeBtn.style.transform = "scale(0)";
	}
});
