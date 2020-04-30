//Write the input and button for the restaurants search to the restaurants div.
document.querySelector(".restaurants-div").innerHTML += `<input type="text" class="restaurants-input" id="restaurants-input" placeholder="restaurants" >
<button class="restaurants-btn" id="restaurants-btn">Search</button>
`


//fetch statement to get the restaurants for Nashville using the zomato api and parsing the response to json
// fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${type}`, {
//     headers: {
//         "user-key": "d551a890df0c959e96ecd3ba09324aa3",
//     }   
// })
// .then(restaurants => restaurants.json())
// .then(parsedRestaurants => {
//   console.log(parsedRestaurants)
// })

document.querySelector(".restaurants-div").addEventListener("click", function() {
if (condition) {
    
}

    console.log("The button works")
// let type = document.querySelector("#restaurants-input").value
console.log(type)
//fetch statement goes here
})

