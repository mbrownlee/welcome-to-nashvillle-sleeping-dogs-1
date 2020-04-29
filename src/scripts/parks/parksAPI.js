//First assign a variable to hold the HTML element where I want the data to end up
const parksAPI = document.querySelector(".search-results__container")
//fetch gets the data from the database
const parksURL = "https://data.nashville.gov/resource/74d7-b74t.json?$q="
const parkUserSearch = "Shelby"
fetch(`${parksURL}` + `${parkUserSearch}`)
    .then(parks => parks.json())
    .then(parsedParks => {
        //THIS IS THE ONLY PLACE WHERE I HAVE ACCESS TO THE DATA FROM THE API
        console.log(parsedParks)
        //RETURNS AN ARRAY. THEN NEED TO ITERATE THE ARRAY.
     for (const park of parsedParks) {
         //I NEED TO CONVERT EVERY OBJECT TO A STRING. FUNCTION MAKEFOODCARD DOES THAT FOR ME. 
         const parkList = makeParkList(park)
         //NOW I HAVE SRING REPRESENTATION I NEED TO STORE IT IN THE QUERY ABOVE
         parksAPI.innerHTML += parkList
     }   
      
    })
//CONVERTS OBJECT FROM INSIDE THE ARRAY RETURNED FROM FETCH INTO A STRING
   function makeParkList (park) {
       return `
       <h2>${park.park_name}</h2>`
        //<h3>${food.ethnicity}</h3>
       // <h3>${food.category}<h3>`
  
   }