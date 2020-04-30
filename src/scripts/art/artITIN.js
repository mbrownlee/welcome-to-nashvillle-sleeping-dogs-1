//dependencies: artAPI.js

const saveResults = document
  .querySelector(".search-results__container")
  .addEventListener("click", (saveEvent) => {
    if (saveEvent.target.id.includes("btn-art")) {
      let artSaveResult = document.querySelector(
        `#art__${saveEvent.target.id.split("__")[1]}`
      ).innerHTML;
      let artItinerary = document.querySelector(".art-itinerary__container");
      artItinerary.innerHTML = artSaveResult;
    }
  });


