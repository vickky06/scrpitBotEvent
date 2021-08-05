(function () {
    console.log('inside custom script')
    window.addEventListener('message', function (event1) {
        try {
            let event = JSON.parse(event1.data);
            console.log('EVENT RECEIVED', event);
            console.log(event.event_code,"EVENT CODE");console.log(event.data.codee,"DATA CODE");
           
            if ("custom-event" == event.event_code && "open_url" === event.data.code) {
                let e = event.data.data
                    , o = e.url
                    , n = e.windowName || "_blank"
                    , t = e.windowFeatures || "location=true";

                window.open(o, n, t)
            }
            

        } catch (error) { }

    }, false);
})();
