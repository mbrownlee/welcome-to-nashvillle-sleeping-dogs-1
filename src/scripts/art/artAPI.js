//First assign a variable to hold the HTML element where I want the data to end up
const artAPI = document.querySelector(".search-results__container");
//fetch gets the data from the database
document.querySelector("#search-btn__art").addEventListener("click", () => {
	const artURL = "https://data.nashville.gov/resource/eviu-nxp6.json?$q=";
	const artUserSearch = document.querySelector("#search-input__art").value;
	document.querySelector(".search-results__container").innerHTML = "";
	fetch(`${artURL}` + `${artUserSearch}`)
		.then((art) => art.json())
		.then((parsedArt) => {
			//THIS IS THE ONLY PLACE WHERE I HAVE ACCESS TO THE DATA FROM THE API
			console.log(parsedArt);
			//RETURNS AN ARRAY. THEN NEED TO ITERATE THE ARRAY.
			for (const artwork of parsedArt) {
			
				//I NEED TO CONVERT EVERY OBJECT TO A STRING. FUNCTION MAKEPARKLIST DOES THAT FOR ME.
				const artList = makeArtList(artwork);
				//NOW I HAVE SRING REPRESENTATION I NEED TO STORE IT IN THE QUERY ABOVE
				artAPI.innerHTML += artList;
			}
		});
});
//CONVERTS OBJECT FROM INSIDE THE ARRAY RETURNED FROM FETCH INTO A STRING
function makeArtList(artwork) {
	return `
                <h2><a href="${artwork.page_link.url}" target="_blank">${artwork.artwork}</a></h2>
                <p>${artwork.description}</p>
				<h4>Location: ${artwork.location}</h4>
				<button id="save-btn__art">Save</button>`;
}