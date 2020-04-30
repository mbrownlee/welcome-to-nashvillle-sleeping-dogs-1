//dependencies: parksAPI.js

const saveResults = document
	.querySelector(".search-results__container")
	.addEventListener("click", (saveEvent) => {
		if (saveEvent.target.id.includes("btn-parks")) {
			console.log(
				document.querySelector(`#park__${saveEvent.target.id.split("__")[1]}`)
					.innerHTML
			);
		}
	});
