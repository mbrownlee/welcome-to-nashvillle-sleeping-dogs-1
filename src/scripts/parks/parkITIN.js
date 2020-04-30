//dependencies: parksAPI.js

const saveResults = document
  .querySelector(".search-results__container")
  .addEventListener("click", (saveEvent) => {
    if (saveEvent.target.id.includes("btn-parks")) {
      let parkSaveResult = document.querySelector(
        `#park__${saveEvent.target.id.split("__")[1]}`
      ).innerHTML;
      let parkItinerary = document.querySelector(".park-itinerary__container");
      parkItinerary.innerHTML = parkSaveResult;
    }
  });

// document.querySelector(".park-itinerary__container").innerHTML = saveResults;
