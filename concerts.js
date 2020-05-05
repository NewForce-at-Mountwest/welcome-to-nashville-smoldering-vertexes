//ticket master url https://app.ticketmaster.com/discovery/v2/
//searched by city and narrowed down to event name and status using dot method.


            
//tailor fetched info in search results to go with add event listener to eventually print to the itinerary

document.querySelector("#results").addEventListener("click", function(){
    console.log("you clicked this");
itinPrinter()
    document.querySelector("#itin-div").append(document.querySelector(`#searchResultDiv--${event.target.value}`));
});