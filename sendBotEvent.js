(function () {
    console.log('inside custom script')
    window.addEventListener('message', function (event1) {
        try {
            let event = JSON.parse(event1.data);
            console.log('EVENT RECEIVED', event);
            console.log(event.event_code,"EVENT CODE");console.log(event.data.codee,"DATA CODE");
            if ("custom-event" == event.event_code && "cb" === event.data.code) {
                console.log('change Bot banner called');
                var a = document.getElementsByClassName("title");
                while (a.length > 0) {
                    a[0].parentNode.removeChild(a[0]);
                }
                console.log('FLAG 1','remove title class');
                var b = document.getElementsByClassName("sub-title");
                while (b.length > 0) {
                    b[0].parentNode.removeChild(b[0]);
                }
                console.log('FLAG 2','remove SUB title class');
                
                var x = document.getElementsByClassName("actions");
                var element = document.createElement("img");
                element.setAttribute("class", "icon1");
                element.style.maxWidth = "200px";
                element.style.margin = '-10px 0 0 -25px'
                element.style.padding = 0;
                element.setAttribute("src", "https://cdn.yellowmessenger.com/JrLTt9MlqGSU1627640891858.PNG");
                if (x.length > 0) {
                console.log('FLAG 3.1','child appended');
                    
                    x[0].appendChild(element); }
                else{
                      console.log('FLAG 3.2','child appended FAILED');
                    console.log('*'.repeat(20),"TITLE PARENT DOES NOT HAVE ANY VALUES")
                }
            }
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
