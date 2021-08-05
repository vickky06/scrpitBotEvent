(function() {
    console.log('inside custom script')
    window.addEventListener('message', function(event1) {
        try {
            let event = JSON.parse(event1.data);
            console.log('EVENT RECEIVED', event);
            console.log(event.event_code, "EVENT CODE");
            console.log(event.data.code, "DATA CODE");

            if ("custom-event" == event.event_code && "cb" === event.data.code) {
                console.log('value triggered for custom-event');
                var a = document.getElementsByClassName("title");   
                console.log('title execution',a);
                while (a.length > 0) {
                    a[0].parentNode.removeChild(a[0]);
                }
                var b = document.getElementsByClassName("sub-title");
                console.log('sub title execution',b);
                while (b.length > 0) {
                    b[0].parentNode.removeChild(b[0]);
                }
                var x = document.getElementsByClassName("title-parent");
                console.log(' title execution parent',x);
                var element = document.createElement("img");
                element.setAttribute("class", "icon1");
                element.style.maxWidth = "200px";
                element.style.margin = '-10px 0 0 -25px'
                element.style.padding = 0;
                element.setAttribute("src", "https://cdn.yellowmessenger.com/JrLTt9MlqGSU1627640891858.PNG");
                x[0].appendChild(element);

            }


        } catch (error) {}

    }, false);
})();