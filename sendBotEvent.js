(function () {
    console.log('inside custom script')
window.addEventListener('message', function (event1) {
    try {
        console.log('EVENT RECEIVED',event1);
        let event = JSON.parse(event1.data);
        if ("custom-event" == event.event_code && "open_url" === event.data.code) {
            let e = event.data.data
                , o = e.url
                , n = e.windowName || "_blank"
                , t = e.windowFeatures || "location=true";
            window.YellowMessengerPlugin.openBot();
            window.open(o, n, t)
        }
  
    } catch (error) { }

}, false);
    })();
