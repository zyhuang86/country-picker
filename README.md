Country Picker
==

This is a simple application built using React and OpenLayers. When a location is clicked on the map,
a popup will show up to display the country that was selected if found. From the popup, you can bring
up additional information (flag, wiki, coordinates) on the country by clicking on the country name in the popup.
From the control panel, you can also toggle country boundaries and be able to mouse over them.

Note: This application is calling http://ws.geonames.org/ to get country names from coordinates using their demo
account. There is a daily limit associated with the web service based on IP. 

Screenshot
====
![Application Screenshot](/assets/img/country-picker-screenshot.png?raw=true "Application Screenshot")


Build & Deployment
===

For installation and local deployment, run the following commands

    npm install
    npm start
    
Navigate to http://localhost:3000


For production, run the following commands

    npm run build


