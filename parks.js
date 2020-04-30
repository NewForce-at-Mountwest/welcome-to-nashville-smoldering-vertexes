let

fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`, {
  "$$app_token": "13nl5nk63d0acrwo6ufqryne8rgqfwsv17seprnfwqyxeliqix"
})
    .then(r => r.json())
    .then(parksArray => {
        console.log(parksArray)
        parksArray.forEach(park => {
            console.log(park)
            if (park.community_center === "Yes"){
                // const parksNameHTMLString
                document.querySelector("#results-textarea").innerHTML += `<p>${park.park_name}</p>` 

            }
        })
        
    })

    // key ID: d74bdg9o2r4jdove1ww0di1t9
    // key secret: 13nl5nk63d0acrwo6ufqryne8rgqfwsv17seprnfwqyxeliqix