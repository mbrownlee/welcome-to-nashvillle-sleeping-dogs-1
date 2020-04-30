const concertsAPI = document.querySelector(".search-results__container");
//fetch gets the data from the database
document.querySelector("#search-btn__concerts").addEventListener("click", () => {
  const parksURL = "https://data.nashville.gov/resource/74d7-b74t.json?$q=";
  const concertUserSearch = document.querySelector("#search-input__concerts").value;
  document.querySelector(".search-results__container").innerHTML = "";
  fetch(`${concertsURL}` + `${concertUserSearch}`)
    .then((concerts) => concerts.json())
    .then((parsedConcerts) => {
      //THIS IS THE ONLY PLACE WHERE I HAVE ACCESS TO THE DATA FROM THE API
      console.log(parsedConcerts);
      //RETURNS AN ARRAY. THEN NEED TO ITERATE THE ARRAY.
      for (let i = 0; i < parsedConcerts.length; i++) {
        // parse the address into a to be dot notted into
        /*parsedParks[i].newAddress = JSON.parse(
          parsedParks[i].mapped_location.human_address
        ); */
        //I NEED TO CONVERT EVERY OBJECT TO A STRING. FUNCTION MAKEPARKLIST DOES THAT FOR ME.
        parsedConcerts[i].id = i;
        const ConcertList = makeConcertListComponent(parsedConcerts[i]);
        //NOW I HAVE SRING REPRESENTATION I NEED TO STORE IT IN THE QUERY ABOVE
        concertsAPI.innerHTML += concertList;
      }
    });
});
//CONVERTS OBJECT FROM INSIDE THE ARRAY RETURNED FROM FETCH INTO A STRING
function makeConcertListComponent(park) {
  return `
			<section>
				<div id="park__${park.id}">${park.park_name}</div>
				<div>Doge friendly: ${park.dog_park}</div>
				<div>${park.newAddress.address} ${park.newAddress.city} ${park.newAddress.state}</div>
				<button id="btn-parks__${park.id}">Save</button>
			</section>`;
}