(function () {
    console.log('inside custom script')
    window.addEventListener('message', function (event1) {
        try {
            let event = JSON.parse(event1.data);
            console.log('EVENT RECEIVED', event);
            console.log(event.event_code,"EVENT CODE");console.log(event.data.code,"DATA CODE");
           
            if ("custom-event" == event.event_code && "open_url" === event.data.code) {
                    let e = event.data.data
                    , current = e.currentJouney || ""
                    , url = e.url
                    , windowName = e.windowName || "_blank"
                    , wFeat = e.windowFeatures || "location=true";
                localStorage.setItem("autoOpen", "true");
                if(current)
                    {
                        console.log('setting current',current)
                         localStorage.setItem("current", current);
                    }
               
                window.open(url, windowName, wFeat)
            }
            

        } catch (error) { }

    }, false);
})();
