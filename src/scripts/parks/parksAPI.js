//First assign a variable to hold the HTML element where I want the data to end up
const parksAPI = document.querySelector(".search-results__container");
//fetch gets the data from the database
document.querySelector("#search-btn__parks").addEventListener("click", () => {
	const parksURL = "https://data.nashville.gov/resource/74d7-b74t.json?$q=";
	const parkUserSearch = document.querySelector("#search-input__parks").value;
	document.querySelector(".search-results__container").innerHTML = "";
	fetch(`${parksURL}` + `${parkUserSearch}`)
		.then((parks) => parks.json())
		.then((parsedParks) => {
			//THIS IS THE ONLY PLACE WHERE I HAVE ACCESS TO THE DATA FROM THE API
			console.log(parsedParks);
			//RETURNS AN ARRAY. THEN NEED TO ITERATE THE ARRAY.
			for (const park of parsedParks) {
				// parse the address into a to be dot notted into
				park.newAddress = JSON.parse(park.mapped_location.human_address);
				//I NEED TO CONVERT EVERY OBJECT TO A STRING. FUNCTION MAKEPARKLIST DOES THAT FOR ME.
				const parkList = makeParkList(park);
				//NOW I HAVE SRING REPRESENTATION I NEED TO STORE IT IN THE QUERY ABOVE
				parksAPI.innerHTML += parkList;
			}
		});
});
//CONVERTS OBJECT FROM INSIDE THE ARRAY RETURNED FROM FETCH INTO A STRING
function makeParkList(park) {
	return `
				<h2>${park.park_name}</h2>
				<p>Doge friendly: ${park.dog_park}</p>
				<p>${park.newAddress.address} ${park.newAddress.city} ${park.newAddress.state}</p>
				<button id="save-btn__parks">Save</button>`;
}
