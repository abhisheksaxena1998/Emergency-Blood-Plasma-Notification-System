

chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
    var url = tabs[0].url;
    var c;
    var la;
    var lo;
    var acc;
    //theUrl="https://node-blood-donation-app.herokuapp.com/getdonors/api?location=delhi";//+url;
    //theUrl2="https://mudvfinalradar.eu-gb.cf.appdomain.cloud/result?url="+url;
    //console.log(url);
    //alert ("Hello")
  
    if (url!="chrome://newtab/")
    {
      if (window.navigator.geolocation) {
        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        
        function success(pos) {
          var crd = pos.coords;
        
          console.log('Your current position is:');
          console.log(`Latitude : ${crd.latitude}`);
          console.log(`Longitude: ${crd.longitude}`);
          console.log(`More or less ${crd.accuracy} meters.`);
          la=crd.latitude
          lo=crd.longitude
          acc=" More or less "+crd.accuracy+ " meters accuracy"
          theUrl2="https://revgeoapi.herokuapp.com/result?LAT="+crd.latitude+"&LON="+crd.longitude;
          //alert (theUrl2)
          fetch(theUrl2)
            .then((response) => {
              //alert (response.json().allusers.length)
                return response.json();

            })
            
            .then((myJson) => {
                obj = myJson;
                c=obj.city
                //alert (obj.city)
                theUrl="https://node-blood-donation-app.herokuapp.com/getdonors/api?location="+obj.city;
                //alert (theUrl)
                var obj;

        fetch(theUrl)
            .then((response) => {
              //alert (response.json().allusers.length)
                return response.json();

            })
            
            .then((myJson) => {
                obj = myJson;

                //alert(obj.allusers.length)
                if (obj.allusers.length >= 1)
                {
                    function show() {
  
                        new Notification("Donor found nearby !!", {
                          icon: 'life.jpg',
                          body: obj.allusers.length+' Donor found nearby in ' + c + '\nLatitude: '+ la + ' Longitude: '+ lo+ acc,
                          requireInteraction: true
                        }).onclick = (e) => {
                          window.open("https://node-blood-donation-app.herokuapp.com/track");
                      }

                      
                     };
                      
                      
                      
                      // Conditionally initialize the options.
                      if (!localStorage.isInitialized) {
                        localStorage.isActivated = true;   // The display activation.
                        localStorage.frequency = 20;        // The display frequency, in minutes.
                        localStorage.isInitialized = true; // The option initialization.
                      }
                      
                      // Test for notification support.
                      if (window.Notification) {
                        // While activated, show notifications at the display frequency.
                        if (JSON.parse(localStorage.isActivated)) { show(); }
                      
                        
                      }
                      
                    /*alert("Malicious URL Detected !! \n"+url);
                    if (window.confirm("Do you want to leave this unsafe site? \n\nThis site is not safe!!")) { 
                        window.open("https://www.google.com/", "You have been re-directed to a safe site!!");
                      }
                      */
                }
               

            });
              }); 
          //alert (`Latitude : ${crd.latitude} Longitude: ${crd.longitude}`)
        }
        
        function error(err) {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        
        navigator.geolocation.getCurrentPosition(success, error, options);        
        // Geolocation available
       } 
        //fetch(theUrl2)

        //console.log("Script Started");
         
        //console.log(obj);

        
        
    }
    

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.runtime.reload();
    });
});







