# Emergency Notification System       

![visitors](https://visitor-badge.laobi.icu/badge?page_id=abhisheksaxena1998/Emergency-Blood-Plasma-Notification-System)

### An always on extension that detects live location (Latitude, Longitude) reverse geocodes it and notifies if there are any acceptors and donors in vicinity with measured accuracy.

Machine Learning Module at: https://github.com/abhisheksaxena1998/FluidLedger
<br>
<br>
Jupyter Notebook at: https://colab.research.google.com/github/abhisheksaxena1998/FluidLedger/blob/master/SerumLedger.ipynb

## System Architecture And Design

![demo](/howTo/Artitecturev1.gif)

## Overview

![demo](/howTo/DesktopNotificationDemov4.gif)

<br>
<a href="https://github.com/abhisheksaxena1998/">
  <img align="center" src="/howTo/popupimage.png" height="440rem" />
</a>
<a href="https://github.com/abhisheksaxena1998/">
  <img align="right" src="/howTo/SLimage.png" height="220rem"/>
</a>

## Desktop Notifications:

<a href="https://github.com/abhisheksaxena1998/">
  <img align="center" src="/howTo/notif.png" height="198rem"/>
</a>
<a href="https://github.com/abhisheksaxena1998/">
  <img align="right" src="/howTo/desktopnotif2.png" height="200rem"/>
</a>




## Live Demonstration

### Desktop Notification Demonstration

![demo](/howTo/DesktopNotificationDemov2.gif)

### Direct Tracking Demonstration

![demo](/howTo/DesktopNotificationDemov3.gif)

## Installation Guide.

![How to install](/howTo/howtouse.gif)

1.	Download zip file from releases https://github.com/abhisheksaxena1998/Emergency-Blood-Plasma-Notification-System/releases.
2.	Extract the zip file.
3.	Turn on developer mode in your Browser.
4.  Load unpacked browser extension.

## API Usage.

Deployed on heroku an application that reverse geocodes coordinates to provide city and state

https://revgeoapi.herokuapp.com/

For Instance:

    https://revgeoapi.herokuapp.com/result?LAT=28.6139&LON=77.2090

![API Usage](/howTo/APIUsage.gif)

Endpoint to return information of all users.

    https://node-blood-donation-app.herokuapp.com/getallusers
    
Endpoint to search users in a given location.

    https://node-blood-donation-app.herokuapp.com/getdonors/api?location=Delhi
    
    Generic: https://node-blood-donation-app.herokuapp.com/getdonors/api?location={SEARCH_LOCATION_HERE}

Application link to register users: https://node-blood-donation-app.herokuapp.com/

## Team Members 💻

1. <a href="https://github.com/IshjotSingh97">Ishjot Singh</a>
2. <a href="https://github.com/proxy707">Prince Gaur</a>
3. <a href="https://github.com/abhisheksaxena1998">Abhishek Saxena</a>
