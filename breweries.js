//PRINTS SEARCH BAR AND SEARCH BUTTON TO THE DOM
document.querySelector(".breweries-div").innerHTML = `
 <input id="brewInput" type="text" placeholder="Breweries by Name">
 <button id="brewSearch">Search</button>
 `;

//PRINT SEARCH RESULTS TO THE DOM
document.querySelector("body").addEventListener("click", function () {
  if (event.target.id === "brewSearch") {
    resultsPrinter();

    const brewResults = document.querySelector("#brewInput").value;
    console.log(brewResults);
    brewerySearch(brewResults);
  }
});

let brewButtonCounter = 0;

//Search Function
function brewerySearch(name) {
  fetch(
    `https://api.openbrewerydb.org/breweries?by_city=nashville&by_state=tennessee&by_name=${name}`
  )
    .then((breweries) => breweries.json())
    .then((parsedBrewriesArray) => {
      parsedBrewriesArray.forEach((brewery) => {
        console.log(brewery.name);
        document.querySelector(
          ".results-div"
        ).innerHTML += `<p id="brewName${brewButtonCounter}">${brewery.name}</p> <button id="saveButton" value=${brewButtonCounter}>save</button>`;
        brewButtonCounter++;
      });
    });
}

//adds click funtionality to save button and prints results to the dom
document.querySelector("#results").addEventListener("click", function () {
  console.log("save click");
//   itinPrinter();
  document.querySelector("#brewery-selected").appendChild(document.querySelector(`#brewName${event.target.value}`))

});
