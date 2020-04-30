//dependencies: parksAPI.js

const saveResults = document
	.querySelector(".search-results__container")
	.addEventListener("click", (saveEvent) => {
		if (saveEvent.target.id.includes("btn-parks")) {
			console.log(
				document.querySelector(`#park__${saveEvent.target.id.split("__")[1]}`)
					.innerHTML
			);
			// if (document.querySelector(".dropdown").value === "" || document.querySelector(".attractionDropdown").value === "" || document.querySelector(".eatDropdown").value === "") {
			//   alert("Please complete your Itinerary")
			// } else {
			//   const selectedPark = document.querySelector(".dropdown").value
			//   const [parkCode, parkState] = document.querySelector(".dropdown").value.split("--")
			//   const foundPark = parkCollection.find(
			//     (singlePark) => {
			//       return singlePark.parkCode === parkCode
			//     }
			//   )
			//   const parkName = foundPark.fullName
			//   const savedTrip = {
			//     park: parkName,
			//     bizzare: document.querySelector(".attractionDropdown").value,
			//     eatery: document.querySelector(".eatDropdown").value
			//   }
			//           saveTrip(savedTrip).then(
			//             () => {
			//               ItineraryListComponent()
			//             }
			//             )
			//           }

			//
		}
	});
