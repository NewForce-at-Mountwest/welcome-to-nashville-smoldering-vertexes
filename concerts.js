//ticket master url https://app.ticketmaster.com/discovery/v2/
//searched by city
//api key Hftj2vZHCGI9rWySOyg1NifFCLWd7KMA
fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&apikey=Hftj2vZHCGI9rWySOyg1NifFCLWd7KMA")
    .then(response => response.json())
    .then(eventInfoArray => {
        console.log(eventInfoArray._embedded.events)
    });

    




//add an event listener for the search text in id="concertSearch" button id="concertSearch-btn".  might need an if/else with statement for value typed into search.
document.querySelector("#concertSearch-btn").addEventListener("click", function(){
    // console.log("you clicked search button")
    const concertSearchValue = document.querySelector("#concertSearch").value 
    console.log(concertSearchValue)
});



// function printConcertSearch(){

//fetch info from ticket master

//tailor fetched info to go with add event listener 