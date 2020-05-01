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
            //         // Print 'results' to the DOM
            for(i=0; i < eventInfoArray._embedded.events.length; i++){
                document.querySelector("#results").innerHTML +=
                `<p>${eventInfoArray._embedded.events[i].name}</p>
                <p>${eventInfoArray._embedded.events[i].url}</p>`
            }
            if(concertSearchValue === "Lady Antebellum"){
                document.querySelector("#results").innerHTML = `<p>${eventInfoArray._embedded.events[0].name}</p>
                <p>${eventInfoArray._embedded.events[0].url}</p>`
            }else if(concertSearchValue === "Rocketman" || concertSearchValue=== "Nashville Symphony"){
                document.querySelector("#results").innerHTML = `<p>${eventInfoArray._embedded.events[1].name}</p>
                <p>${eventInfoArray._embedded.events[1].url}</p>` 
            }else if(concertSearchValue === "Harry Styles"){
                document.querySelector("#results").innerHTML = `<p>${eventInfoArray._embedded.events[2].name}</p>
                <p>${eventInfoArray._embedded.events[2].url}</p>`
            }else if(concertSearchValue === "Kenny Chesney"){
                document.querySelector("#results").innerHTML = `<p>${eventInfoArray._embedded.events[3].name}</p>
                <p>${eventInfoArray._embedded.events[3].url}</p>`
            }else if(concertSearchValue === "Motley Crue" || concertSearchValue === "Def Leppard" || concertSearchValue === "Joan Jett"){
                document.querySelector("#results").innerHTML = `<p>${eventInfoArray._embedded.events[4].name}</p>
                <p>${eventInfoArray._embedded.events[4].url}</p>`
            }else if(concertSearchValue === "Alanis Morissette"){
                document.querySelector("#results").innerHTML = `<p>${eventInfoArray._embedded.events[5].name}</p>
                <p>${eventInfoArray._embedded.events[5].url}</p>`
            }else if(concertSearchValue === "Halsey"){
                document.querySelector("#results").innerHTML = `<p>${eventInfoArray._embedded.events[6].name}</p>
                <p>${eventInfoArray._embedded.events[6].url}</p>`
            }else if(concertSearchValue === "Jimmy Buffett"){
                document.querySelector("#results").innerHTML = `<p>${eventInfoArray._embedded.events[7].name}</p>
                <p>${eventInfoArray._embedded.events[7].url}</p>`
            }else if(concertSearchValue === "Justin Bieber"){
                document.querySelector("#results").innerHTML = `<p>${eventInfoArray._embedded.events[8].name}</p>
                <p>${eventInfoArray._embedded.events[8].url}</p>`
            }
        });
    });

    




//add an event listener for the search text in id="concertSearch" button id="concertSearch-btn".  might need an if/else with statement for value typed into search.






// function printConcertSearch(){

//fetch info from ticket master

//tailor fetched info to go with add event listener 