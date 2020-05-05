let restaurantsArray;



//Writes the input and button for the restaurants search to the restaurants div.
document.querySelector(".restaurants-div").innerHTML += `
<input type="text" class="restaurants-input" id="restaurants-input" placeholder="Restaurants" >
<select id="restaurants-sort">
    <option value="ratingHigh">Rating high to low</option>
    <option value="ratingLow">Rating low to high</option>
    <option value="costHigh">Cost for two high to low</option>
    <option value="costLow">Cost for two low to high</option>
</select>
<button class="restaurants-btn" id="restaurants-btn">Search</button>
`


document.querySelector(".restaurants-div").addEventListener("click", function () {

    if(event.target.id === "restaurants-btn"){
    resultsPrinter()
    let type = document.querySelector("#restaurants-input").value
    
    // fetch statement to get the restaurants for Nashville using the zomato api and parsing the response to json
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${type}`, {
        headers: {
            "user-key": zomatoAPIKey,
        }
    })
        .then(restaurants => restaurants.json())
        .then(parsedRestaurants => {
            console.log(parsedRestaurants.restaurants)
            const inputValue = document.querySelector("#restaurants-sort").value
            if (inputValue === "ratingHigh") {
                sortRatingHigh(parsedRestaurants.restaurants)
            } else if(inputValue === "ratingLow"){
                sortRatingLow(parsedRestaurants.restaurants)
            } else if(inputValue === "costHigh"){
                sortCostHigh(parsedRestaurants.restaurants)
            } else if(inputValue === "costLow"){
                sortCostLow(parsedRestaurants.restaurants)
            }
            
            let counter = 0;
            parsedRestaurants.restaurants.forEach(singleRestaurant => {
                document.querySelector("#results-div").innerHTML += `
                <article class="restaurants-search-result" id="rest-article${counter}">
                <div class="restaurants-search-div" id="rest-div${counter}">
                <p><b>
                ${singleRestaurant.restaurant.name}
                </b> 
                 Address: ${singleRestaurant.restaurant.location.address} 
                 User rating: ${singleRestaurant.restaurant.user_rating.aggregate_rating} 
                 Average cost for two: ${singleRestaurant.restaurant.average_cost_for_two}
                </p>         
                </div>
                <button id=rest-add-btn${counter} value=${counter}>Add</button>           
                </article>
                `
                counter++;
            });
        })
    }
    })


// #restaurant-selected
// Adds the search result to the itenerary when the add button is clicked
document.querySelector("#results").addEventListener("click", function(){
        itinPrinter()    
        // console.log("It works")
        // console.log(`#rest-article${event.target.value}`)
        document.querySelector("#restaraunt-selected").appendChild(document.querySelector(`#rest-div${event.target.value}`) )
        document.querySelector("#results-div").remove(document.querySelector(`#rest-article${event.target.value}`)) 
})
   


//Sort functions to sort the restaurant array
//Syntax to call the functions inside fetch: sortRatingHigh(parsedRestaurants.restaurants)
function sortCostLow(array) {
    array.sort((a, b) =>
        Number(a.restaurant.average_cost_for_two) - Number(b.restaurant.average_cost_for_two)
    )
}

function sortCostHigh(array) {
    array.sort((a, b) =>
        Number(b.restaurant.average_cost_for_two) - Number(a.restaurant.average_cost_for_two)
    )
}

function sortRatingHigh(array) {
    array.sort((a, b) =>
        Number(b.restaurant.user_rating.aggregate_rating) - Number(a.restaurant.user_rating.aggregate_rating)
    )
}

function sortRatingLow(array) {
    array.sort((a, b) =>
        Number(a.restaurant.user_rating.aggregate_rating) - Number(b.restaurant.user_rating.aggregate_rating)
    )
}