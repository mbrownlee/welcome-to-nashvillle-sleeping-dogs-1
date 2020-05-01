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
			for (let i = 0; i < parsedArt.length; i++) {
				//I NEED TO CONVERT EVERY OBJECT TO A STRING. FUNCTION MAKEPARKLIST DOES THAT FOR ME.
				parsedArt[i].id = i;
				const artList = makeArtListComponent(parsedArt[i]);
				//NOW I HAVE SRING REPRESENTATION I NEED TO STORE IT IN THE QUERY ABOVE
				artAPI.innerHTML += artList;
			}
		});
});
//CONVERTS OBJECT FROM INSIDE THE ARRAY RETURNED FROM FETCH INTO A STRING
function makeArtListComponent(artwork) {
	return `
            <section class="art-result">
                <div class="art-name" id="art__${artwork.id}"><a href="${artwork.page_link.url}" target="_blank">${artwork.artwork}</a></div>
                <div>${artwork.description}</div>
								<div>Location: ${artwork.location}</div>
                <button id="btn-art__${artwork.id}">Save</button>
            </section>`;
}
