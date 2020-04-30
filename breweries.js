// https://www.openbrewerydb.org/
 
//fetching the information
fetch("https://api.openbrewerydb.org/breweries?by_city=nashville")
  .then((breweries) => breweries.json())
  .then((parsedBrewriesArray) => {
    console.log(parsedBrewriesArray);

    parsedBrewriesArray.forEach(breweries => {
        
      if(parsedBrewriesArray.breweries){

      }
      if(){

      }
      if(){

      }
      if(){

      }
      else {

      }

    });


  });
