# Welcome to Nashville: An itinerary for a day trip to Music City by The Smoldering Vertexes


# Introduction
This application allows Nashville tourists to easily search one of four different areas of local entertainment such as parks, breweries, concerts, and restaurants at a time.  Users can then add their search results to an itinerary on the same page by clicking on a button that prints along with the search result. This application utilizes several APIs listed below under each specific search detail below.  

# Requirements
As the application has not officially launched, users may view the source code on GitHub.com/NewForce-at-Mountwest/welcome-to-nashville-smoldering-vertexes.  The user will need the modules listed such as index.html, .gitignore, apiKeys.js, breweries.js, concerts.js, domPrinter.js, restaurants.js, parks.js, and style.css.



1. Concert Search:
In the concernt search bar displayed on the page, users may enter any keyword relating to an artist's name or title of concert to reveal whether or not said concert is available.  The search result will either return more than one concert containing the keyword, one result, or 'No music for you :(' if the concert is unavailable.  Each search result will print with an individual 'Save' button if there are search results returned.  The chosen result will then print to an itinerary below the search section.  The user must use proper capitalization for the search results to render correctly, as the key words are case sensitive.  The user can only search for one concert or artist at a time.  The search results are rendered from Ticket Master's API (https://app.ticketmaster.com/discovery/v2/).

2. Parks Search:
User can narrow down their options for local parks by searching for specific attributes they desire in a local park.  For example, the user can search for 'pool, dog park' in the park's search field to return a park name that meets his or her needs.  Once the search results print below the search bars, the user can click 'Save'.  This will print the user's chosen park to an itinerary below the search bars.  Keyword searches must have spaces and commas between them if searching for more than one attribute at a time for the search results to render correctly. The search results are rendered from Metro Gov API (https://dev.socrata.com/foundry/data.nashville.gov/xbru-cfzi).

3. Breweries Search:
Users can search for a local brewery by searching for a keyword of the name of a brewery in the appropriate search bar.  For example, a user can type in 'works' into the brewery search field to return a result of 'East Nashville Beer Works'.  The keyword does not have to be case sensitive, but the user can search only one option at a time.  The user can then click on the 'save' button that returned with the search result to add the brewery to an itinerary below the search bars.  The search results are rendered from Open Brewery DB (https://www.openbrewerydb.org/).

4. Restaurant Search:
The user may search for a desired restaurant in a variety of ways.  The user first must type in what type of restaurant they want into the restaurant search field.  For example, the user may type in 'italian' to return a list of Italian restuarants in Nashville.  After the user types in what type of restaurant they desire, they can choose their preferred option from two drop-down menus alongside the search bar that displays the results in a certain order depending on rating and pricing.  For example, a user may choose their search results to render their Italian restaurant results ranging from a high to low rating but low to high pricing to return an Italian restaurant with the highest rating but lowest price.  The search results are rendered from Zomato's API (https://developers.zomato.com/documentation#!/restaurant/search).

# Contributors
Swathi Mukkamala
Barry Griffith
Derek Mayse
Lindsey Crittendon