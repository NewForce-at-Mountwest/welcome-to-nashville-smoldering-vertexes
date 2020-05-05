//Search bar with search button for park feature
document.querySelector(".parks-div").innerHTML = `<input type="text" class="search-input" id="parks-search" placeholder="Enter a park feature">
<button class="search-btn" id="parks-search-btn">Search</button>`

//Event listener for clicking on the search button
document.querySelector("#parks-search-btn").addEventListener("click", function(){

    //Grab value of input in the search bar
    const parkInputValue = document.querySelector("#parks-search").value

    //Conditional to accept more than one parameter, separated by a ',' in the search bar
    if (parkInputValue.includes(",") ===  true){

        //Split the input by the ',' to search the API with each parameter
        const parkInputValueArray = parkInputValue.split(", ")
        //Start building the URL to fetch from
        let parkInputURL =`https://data.nashville.gov/resource/xbru-cfzi.json?`
        //For loop to parse through each parameter
        for(let i = 0; i < parkInputValueArray.length; i++){
            //Replace each ' ' typed by the user in the search bar with an '_' which can be readily search in the URL
            const parkInput = parkInputValueArray[i].replace(" ", "_")
            //Add to URL
            parkInputURL += `${parkInput}=Yes&`
        }
        //Call the results container
        resultsPrinter()
        //Call function fetchAPI with the constructed URL from above
        fetchAPI(parkInputURL)
    }
    //Default conditional if only one parameter is entered in the search bar
    else{
        //Replace ' ' from search input with an '_' that can be incorporated in the URL
        parkInput = parkInputValue.replace(" ", "_")
            //Call results container
            resultsPrinter()
            //URL to fetch from with selection of user input from search bar
            const parkInputURL =`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`
            //Call function fetchAPI with the constructed URL from above
            fetchAPI(parkInputURL)
    }
})

//Function to utilize external API; parameter takes in constructed URL from above
function fetchAPI(parkInputURL){
    //Fetch API
    fetch(`${parkInputURL}`)
        //Convert to JSON
        .then(r => {
            //If invalid URL is sent (because of invalid search parameter)
            if(r.status === 400){
                document.querySelector("#tester").innerHTML = "I'm sorry, we could not find the feature you requested. Please try again with a different name, all lowercase letters, plural/singular words, etc. "
            }
            else{return r.json()}
        })
        //Receive data in an array of objects to manipulate
        .then(parksArray => {
            //Add counter to include a numbered list of parks in the results and add to IDs of elements
            let counter = 1;
            //For Each loop to parse through the array to select each object
            parksArray.forEach(park => {
                //Select results container to print '1. park name: park address' with a 'Save' button
                document.querySelector("#results-div").innerHTML += `<article class="results"> <p id="counter--${counter}">${counter}. </p>
                <p id="result--${counter}">${park.park_name}: <em>${park.mapped_location_address}<em></p> 
                <button id="save--${counter}" type="reset"> Save </button></article>` 
                
                //Increment counter
                counter++; 
            })

            //Event Listener for functionality of 'Save' button in results container
            document.querySelector("#results-div").addEventListener("click", function(){
                if (event.target.id.includes("save")){
                    //Grabs park name and address by its ID
                    const parkToSave = document.getElementById(`result--${event.target.id.split("--")[1]}`)
                    //Grabs's ID of the save button selected
                    const saveButton = document.getElementById(`save--${event.target.id.split("--")[1]}`)
                    //Grabs the ID of the counter from the list of parks
                    const counterNumber = document.getElementById(`counter--${event.target.id.split("--")[1]}`)

                    //Removes the park's information from the results container after its save button is selected
                    counterNumber.remove()
                    parkToSave.remove()
                    saveButton.remove()

                    //Call Itinerary container
                    itinPrinter()
                    //Add Park to be saved to the itinerary container
                    document.querySelector("#park-selected").appendChild(parkToSave)
                }
            })   
        })
    }

