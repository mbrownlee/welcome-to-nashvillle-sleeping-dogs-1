const saveConcertResults = document
	.querySelector(".search-results__container")
	.addEventListener("click", (saveEvent) => {
		if (saveEvent.target.id.includes("btn-concerts")) {
			let concertSaveResult = document.querySelector(
				`#concert__${saveEvent.target.id.split("__")[1]}`
			).innerHTML;
			let concertItinerary = document.querySelector(
				".concerts-itinerary__container"
			);
			concertItinerary.innerHTML = concertSaveResult;
		}
	});
