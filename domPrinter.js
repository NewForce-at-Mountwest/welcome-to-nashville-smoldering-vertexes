//Search printer
document.querySelector("#search").innerHTML = `<h2>Search for stuff to do today</h2>

<div class="parks-div">
    <input type="text" class="search-input" id="parks-search" placeholder="parks by feature">
    <button class="search-btn" id="parks-search-btn">Search</button>
</div>

<div class="breweries-div">
<input type="text" class="search-input" id="breweries-search" placeholder="breweries">
<button class="search-btn" id="breweries-search-btn">Search</button>
</div>

<div class="meetups-div">
    <input type="text" class="search-input" id="meetups-search" placeholder="meetups by topic">
    <button class="search-btn" id="meetups-search-btn">Search</button>
</div>

<div class="concerts-div">
    <input type="text" class="search-input" id="concerts-search" placeholder="concerts by genre">
    <button class="search-btn" id="concerts-search-btn">Search</button>
</div>`

//Search results printer
document.querySelector("#results").innerHTML = `<h2>Results</h2>
<div class="results-div" id="results-textarea" ></div>`

//Itinerary printer
document.querySelector("#itinerary").innerHTML = `<h2>My itinerary</h2>
<div class="itin-div" id="itin-div"></div>`