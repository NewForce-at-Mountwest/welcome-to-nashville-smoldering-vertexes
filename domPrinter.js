//Concert search printer
function printConcertSearch(){
    document.querySelector(".concerts-div").innerHTML += `<input type="search" placeholder="Search by Genre" id="concertSearch">
    <button id="concertSearch-btn">Search</button>`
    }
    printConcertSearch();
    
// function resultsPrinter(){
//     document.querySelector("#results").innerHTML = `<h2>Results</h2>
//     <div class="results-div" id="results-div"></div>
//     `
// }

//Itinerary printer
function itinPrinter() {
    document.querySelector("#itinerary").innerHTML = `<h2>My itinerary</h2>
    <div class="itin-div" id="itin-div"></div>`
}



