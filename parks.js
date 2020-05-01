document.querySelector(".parks-div").innerHTML = `<input type="text" class="search-input" id="parks-search" placeholder="parks by feature">
<button class="search-btn" id="parks-search-btn">Search</button>`

document.querySelector("#parks-search-btn").addEventListener("click", function(){
    const parkInputValue = document.querySelector("#parks-search").value
    if(parkInputValue !== undefined){
        parkInput = parkInputValue.replace(" ", "_")
        console.log(parkInput)
        resultsPrinter()
    
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`)
        .then(r => r.json())
        .then(parksArray => {
            console.log(parksArray)
            let counter = 1;
            parksArray.forEach(park => {
                document.querySelector("#results-div").innerHTML += `<p>${counter}. ${park.park_name}: <em>${park.mapped_location_address}<em> <button id= "sav-btn-${counter}">Save</button></p>`
                counter++; 
            })
            
        })
    }
    })


    // fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`,{
    //     // headers: {
    //     //     "X-App-Token": "d74bdg9o2r4jdove1ww0di1t9"
    //     // }
    // })
    // key ID: d74bdg9o2r4jdove1ww0di1t9
    // key secret: 13nl5nk63d0acrwo6ufqryne8rgqfwsv17seprnfwqyxeliqix