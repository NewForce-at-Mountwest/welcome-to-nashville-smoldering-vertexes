//Concert search printer
function printConcertSearch(){
    document.querySelector(".concerts-div").innerHTML = `<input type="search" placeholder="Search by Artist" id="concertSearch">
    <button id="concertSearch-btn">Search</button>`
    }
    printConcertSearch();
    
// function to pull ticket master's API, listen for the click, and place the value in a loop/conditional to print to the dom with a save button.
//ticket master url https://app.ticketmaster.com/discovery/v2/
//searched by city
//api key Hftj2vZHCGI9rWySOyg1NifFCLWd7KMA
fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&apikey=Hftj2vZHCGI9rWySOyg1NifFCLWd7KMA")
    .then(response => response.json())
    .then(eventInfoArray => {
        console.log(eventInfoArray._embedded.events)
        document.querySelector("#concertSearch-btn").addEventListener("click", function(){
            // console.log("you clicked search button")
            const concertSearchValue = document.querySelector("#concertSearch").value;
            // console.log(concertSearchValue)
            //         // Print 'results' to the DOM if the value meets the condition
            for(i=0; i < eventInfoArray._embedded.events.length; i++){
                document.querySelector("#results").innerHTML +=
                `<p>${eventInfoArray._embedded.events[i].name}</p>
                <p>${eventInfoArray._embedded.events[i].dates.status.code}</p>`
            }
            if(concertSearchValue === "Lady Antebellum"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[0].name}</p>
                <p>${eventInfoArray._embedded.events[0].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Rocketman" || concertSearchValue=== "Nashville Symphony"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[1].name}</p>
                <p>${eventInfoArray._embedded.events[1].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>` 
            }else if(concertSearchValue === "Harry Styles"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[2].name}</p>
                <p>${eventInfoArray._embedded.events[2].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Kenny Chesney"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[3].name}</p>
                <p>${eventInfoArray._embedded.events[3].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Motley Crue" || concertSearchValue === "Def Leppard" || concertSearchValue === "Joan Jett"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[4].name}</p>
                <p>${eventInfoArray._embedded.events[4].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Alanis Morissette"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[5].name}</p>
                <p>${eventInfoArray._embedded.events[5].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Halsey"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[6].name}</p>
                <p>${eventInfoArray._embedded.events[6].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Jimmy Buffett"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[7].name}</p>
                <p>${eventInfoArray._embedded.events[7].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Justin Bieber"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[8].name}</p>
                <p>${eventInfoArray._embedded.events[8].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Luke Bryan"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[9].name}</p>
                <p>${eventInfoArray._embedded.events[9].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Matchbox Twenty"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[10].name}</p>
                <p>${eventInfoArray._embedded.events[10].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Janet Jackson"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[11].name}</p>
                <p>${eventInfoArray._embedded.events[11].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Alan Jackson"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[12].name}</p>
                <p>${eventInfoArray._embedded.events[12].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Louis Tomlinson"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[13].name}</p>
                <p>${eventInfoArray._embedded.events[13].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Doobie Brothers"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[14].name}</p>
                <p>${eventInfoArray._embedded.events[14].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Melanie Martinez"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[15].name}</p>
                <p>${eventInfoArray._embedded.events[15].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Nickelback"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[16].name}</p>
                <p>${eventInfoArray._embedded.events[16].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Journey" || concertSearchValue === "Pretenders"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[17].name}</p>
                <p>${eventInfoArray._embedded.events[17].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "Chris Stapleton"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[18].name}</p>
                <p>${eventInfoArray._embedded.events[18].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else if(concertSearchValue === "5 Seconds of Summer"){
                document.querySelector("#results").innerHTML = `
                <h4>Concert Search Results</h4>
                <p>${eventInfoArray._embedded.events[19].name}</p>
                <p>${eventInfoArray._embedded.events[19].dates.status.code}</p>
                <button class="concertSave-btn">Save</button>`
            }else{
                document.querySelector("#results").innerHTML = `
                <h4>No Search Resuts</h4>`
            }
        });
    });

    






// function printConcertSearch(){



// Itinerary printer
// function itinPrinter() {
//     document.querySelector("#itinerary").innerHTML = `<h2>My itinerary</h2>
//     <div class="itin-div" id="itin-div"></div>`
// }



