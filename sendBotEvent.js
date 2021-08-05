(function () {
    console.log('inside custom script')
    window.addEventListener('message', function (event1) {
        try {
            console.log('EVENT RECEIVED', event1);
            let event = JSON.parse(event1.data);
            if ("custom-event" == event.event_code && "open_url" === event.data.code) {
                let e = event.data.data
                    , o = e.url
                    , n = e.windowName || "_blank"
                    , t = e.windowFeatures || "location=true";

                window.open(o, n, t)
            }
            else if ("custom-event" == event.event_code && "changeBotBanner" === event.data.code) {
                var a = document.getElementsByClassName("title");
                while (a.length > 0) {
                    a[0].parentNode.removeChild(a[0]);
                }
                var b = document.getElementsByClassName("sub-title");
                while (b.length > 0) {
                    b[0].parentNode.removeChild(b[0]);
                }
                var x = document.getElementsByClassName("actions");
                var element = document.createElement("img");
                element.setAttribute("class", "icon1");
                element.style.maxWidth = "200px";
                element.style.margin = '-10px 0 0 -25px'
                element.style.padding = 0;
                element.setAttribute("src", "https://cdn.yellowmessenger.com/JrLTt9MlqGSU1627640891858.PNG");
                if (x.length > 0) { x[0].appendChild(element); }
                else{
                    console.log('*'.repeat(20),"TITLE PARENT DOES NOT HAVE ANY VALUES")
                }
            }

        } catch (error) { }

    }, false);
})();
