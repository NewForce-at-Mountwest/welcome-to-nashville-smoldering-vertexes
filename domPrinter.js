//Concert search printer
function printConcertSearch() {
    document.querySelector(".concerts-div").innerHTML = `<input type="search" placeholder="Search by Artist" id="concertSearch">
    <button id="concertSearch-btn">Search</button>`
}
printConcertSearch();

// function to pull ticket master's API, listen for the click, and place the value in a loop/conditional to print to the dom with a save button.
//ticket master url https://app.ticketmaster.com/discovery/v2/
//searched by city

fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&apikey=${ticketMasterKey}`)
    .then(response => response.json())
    .then(eventInfoArray => {
        console.log(eventInfoArray._embedded.events)
        document.querySelector("#concertSearch-btn").addEventListener("click", function () {
            // console.log("you clicked search button")
            document.querySelector("#results").innerHTML = '';
            const concertSearchValue = document.querySelector("#concertSearch").value;
            // console.log(concertSearchValue)
            //         // Print 'results' to the DOM if the value meets the condition
            let test = false;
            for (i = 0; i < eventInfoArray._embedded.events.length; i++) {
                // console.log(concertSearchValue);
                console.log(!eventInfoArray._embedded.events[i].name.includes(concertSearchValue))
                // console.log(eventInfoArray._embedded.events[i]);

                if (eventInfoArray._embedded.events[i].name.includes(concertSearchValue)) {
                    test = true;
                    document.querySelector("#results").innerHTML +=
                        `<h4>Concert Search Results</h4>
                        <p>${eventInfoArray._embedded.events[i].name}</p>
                <p>${eventInfoArray._embedded.events[i].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`

                } if (i === eventInfoArray._embedded.events.length - 1 && test === false) {
                    document.querySelector("#results").innerHTML = `No music for you :(`
                };
            };
        });
    });








// function printConcertSearch(){



// Itinerary printer
// function itinPrinter() {
//     document.querySelector("#itinerary").innerHTML = `<h2>My itinerary</h2>
//     <div class="itin-div" id="itin-div"></div>`
// }


