//Writes the input and button for the restaurants search to the restaurants div.
document.querySelector(".restaurants-div").innerHTML += `
<input type="text" class="restaurants-input" id="restaurants-input" placeholder="Restaurants" >
<button class="restaurants-btn" id="restaurants-btn">Search</button>
`


document.querySelector(".restaurants-div").addEventListener("click", function () {

    if(event.target.id === "restaurants-btn"){
    resultsPrinter()

    // let type = "mexican"
    // fetch statement to get the restaurants for Nashville using the zomato api and parsing the response to json
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=$mexican`, {
        headers: {
            "user-key": "d551a890df0c959e96ecd3ba09324aa3",
        }
    })
        .then(restaurants => restaurants.json())
        .then(parsedRestaurants => {

           

            console.log(parsedRestaurants.restaurants)

            parsedRestaurants.restaurants.forEach(singleRestaurant => {
                document.querySelector("#results-div").innerHTML += `
                <div class="restaurants-search-result">
                <h4>
                ${singleRestaurant.restaurant.name}
                </h4>
                <p>
                Average cost for two: ${singleRestaurant.restaurant.average_cost_for_two}
                </p>
                <p>
                User rating: ${singleRestaurant.restaurant.user_rating.aggregate_rating}
                </p>                    
                </div>`
            });
        })
    }

    })











    function linksPrinter() {
    document.querySelector("#results-div").innerHTML += `
    <a id="rating-high" href="">Arrange by user rating high to low</a>
    <a id="rating-low" href="">Arrange by user rating low to high</a>
    <a id="cost-high" href="">Arrange by price for two high to low</a>
    <a id="cost-low" href="">Arrange by price for two high to low</a>
    `
}




//Syntaxt to call the functions sortRatingHigh(parsedRestaurants.restaurants)
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

