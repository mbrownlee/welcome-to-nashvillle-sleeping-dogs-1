const concertsAPI = document.querySelector(".search-results__container");

document.querySelector("#search-btn__concerts").addEventListener("click", () => {

let apiUrl = app_keys.app_url
let apiKey = app_keys.app_key

const concertUserSearch = document.querySelector("#search-input__concerts").value;
  document.querySelector(".search-results__container").innerHTML = "";
  fetch(`${apiUrl}${apiKey}&keyword=${concertUserSearch}&local=*&city=Nashville&stateCode=TN`)
    .then((concerts) => concerts.json())
    .then((parsedConcerts) => {
      //THIS IS THE ONLY PLACE WHERE I HAVE ACCESS TO THE DATA FROM THE API
      console.log(parsedConcerts);
      //RETURNS AN ARRAY. THEN NEED TO ITERATE THE ARRAY.
      const events = parsedConcerts._embedded.events
      for (let i = 0; i < events.length; i++) {
        
        
        //console.log(events[i])
        const concertList = makeConcertListComponent(events[i]);
      
       concertsAPI.innerHTML += concertList;
      }
      
    });
});
//CONVERTS OBJECT FROM INSIDE THE ARRAY RETURNED FROM FETCH INTO A STRING
function makeConcertListComponent(concert) {
    console.log("howdy", concert)
  return `
			<section>
				<div id="concert__${concert.id}">${concert.name}</div>
				<div>Venue: ${concert._embedded.venues[0].name}</div>
				<button id="btn-concerts__${concert.id}">Save</button>
			</section>`; 
}