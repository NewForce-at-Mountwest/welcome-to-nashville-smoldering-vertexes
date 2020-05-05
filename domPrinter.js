//Search results printer
function resultsPrinter(){
    document.querySelector("#results").innerHTML = `<h2>Results</h2>
    <p id = "tester"></p><div class="results-div" id="results-div"></div>
    `
}

//Itinerary printer
function itinPrinter() {
    document.querySelector("#itinerary").innerHTML = `<h2>My itinerary</h2>
    <div class="itin-div" id="itin-div">
        <p id="park-selected"></p>
        <p id="brewery-selected"></p>
        <p id="restaraunt-selected"></p>
        <p id="concert-selected"></p>
    </div>`
}


