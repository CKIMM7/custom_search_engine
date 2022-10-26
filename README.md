***Collaborators:***
Dayo Titiloye and Young Kim

***Assignment Title:***
Custom Search Engine

***Installation & usage:***

goto server folder and run npm install to get the packages below
and bring the server up by node app.js

    "cors": "^2.8.5",
    "express": "^4.18.2",
    "node-fetch": "^2.6.1",
    "nodemon": "^2.0.20"
  
***Changelog:***
  
1.0 (up for review)

init commit: 01d55d4
routing and bb array:e56ecdc
fetch works and render to DOM, added READEME: 80c3dec
fixed README: 5a7591c

***Bugs:***
No bugs yet but could run out of daily api fetch requests

***WINS/CHALLENGES:***
most important thing is to fetch my own api's endpoint to trigger
which has a function inside that accepts an query to pull data
from Google's search API. When fetched from the backend, the express
server makes this data available at the endpoint the the user queried
for. fetch from the client side await all this process and succesfully
brings the databack to the browser. which then can be rendered to the document.

***How the app works:***
The app is very simple, goto the search input and put in any search term,
and click the search button to see results for the search term.

Feeling lucky button selects a random search result and redirects the user
to its link







