/* //dependencies: parksAPI.js



// document.querySelector("#save-btn__parks").addEventListener("click", () => {
            
    const savedPark = document.querySelector(".park-itinerary__container")
            return `<h3>${parksItinerary}
            </h3>
`savedPark.innerHTML


}

 */
const makeItinFunction = () => {
  let saveItin = event.target;
  document.querySelector(
    ".park-itinerary__container"
  ).innerHTML = `<p>${saveItin}.h2</p>`;
};
let saveParkButton = document.getElementById("#save-btn__parks");

saveParkButton.addEventListener("click", () => {
  makeItinFunction();
});
