const abtLnk = document.getElementById("abtLnk");
const homeBtn = document.getElementById("homeBtn");

abtLnk.addEventListener("click", function (event) {
	Scroll(event, "aboutUs");
});
homeBtn.addEventListener("click", function (event) {
	Scroll(event, "main");
});

function Scroll(event, eId) {
	event.preventDefault();
	document.getElementById(eId).scrollIntoView({ behavior: "smooth" });
}
