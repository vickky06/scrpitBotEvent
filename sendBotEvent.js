
window.addEventListener('message', function (event1) {
    try {
        console.log('EVENT RECEIVED',event1);
        let event = JSON.parse(event1.data);
        if ("custom-event" == event.event_code && "open_url" === event.data.code) {
            let e = event.data.data
                , o = e.url
                , n = e.windowName || "_blank"
                , t = e.windowFeatures || "location=true";
            window.open(o, n, t)
        }
        else if("custom-event" == event.event_code && "name_validator" === event.data.code){
            var xhttp = new XMLHttpRequest();
            xhttp.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
            xhttp.send();
            return console.log(xhttp.responseText);
        }
    } catch (error) { }

}, false);
