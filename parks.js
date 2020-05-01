document.querySelector(".parks-div").innerHTML = `<input type="text" class="search-input" id="parks-search" placeholder="Enter a feature">
<button class="search-btn" id="parks-search-btn">Search</button>`

document.querySelector("#parks-search-btn").addEventListener("click", function(){
    const parkInputValue = document.querySelector("#parks-search").value
    console.log(parkInputValue.includes(","))
    if (parkInputValue.includes(",") ===  true){
        console.log("I'm inside the first if statement")
        const parkInputValueArray = parkInputValue.split(", ")
        let parkInputURL =`https://data.nashville.gov/resource/xbru-cfzi.json?`
        for(let i = 0; i < parkInputValueArray.length; i++){
            const parkInput = parkInputValueArray[i].replace(" ", "_")
            console.log(parkInput)
            parkInputURL += `${parkInput}=Yes&`
        }
        resultsPrinter()
        fetchAPI(parkInputURL)
    }
    else{
        console.log("I'm in the else statement")
        parkInput = parkInputValue.replace(" ", "_")
            console.log(parkInput)
            resultsPrinter()
            const parkInputURL =`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`
            fetchAPI(parkInputURL)
    }
})


function fetchAPI(parkInputURL){
    fetch(`${parkInputURL}`)
        .then(r => r.json())
        .then(parksArray => {
            console.log(parksArray)
            let counter = 1;
            parksArray.forEach(park => {
                document.querySelector("#results-div").innerHTML += `<p id="counter--${counter}">${counter}. </p><article class="results" id="result--${counter}">
                <p>${park.park_name}: <em>${park.mapped_location_address}<em></p></article> 
                <button id="save--${counter}" type="reset"> Save </button>` 
                
                counter++; 
            })

            document.querySelector("#results-div").addEventListener("click", function(){
                if (event.target.id.includes("save")){
                    const parkToSave = document.getElementById(`result--${event.target.id.split("--")[1]}`)

                    const saveButton = document.getElementById(`save--${event.target.id.split("--")[1]}`)

                    const counterNumber = document.getElementById(`counter--${event.target.id.split("--")[1]}`)

                    counterNumber.remove()
                    parkToSave.remove()
                    saveButton.remove()

                    itinPrinter()
                    document.querySelector("#park-selected").appendChild(parkToSave)
                }
            })   
        })
    }

