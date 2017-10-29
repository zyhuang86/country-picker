Country Picker
==

This is a simple application built using React and OpenLayers. When a location is clicked on the map,
a popup will show up to display the country that was selected if found. From the popup, you can bring
up additional information (flag, wiki, coordinates) on the country by clicking on the country name in the popup.
From the control panel, you can also toggle country boundaries. If the boundaries are visible, you wii be able 
to highlight a country on mouse over.

Note: This application is calling http://ws.geonames.org/ to get country names from coordinates using their demo
account. There is a daily limit associated with the web service based on IP. For local testing, use mock data in 
the following format:

    {"languages":"ar-OM,en,bal,ur","distance":"0","countryCode":"OM","countryName":"Oman"}

Screenshot
====
![Application Screenshot](/public/img/country-picker-screenshot.png?raw=true "Application Screenshot")


Build & Deployment
===

For installation and local deployment, run the following commands

    npm install
    npm start
    
Navigate to http://localhost:3000


For production, run the following commands

    npm run build


