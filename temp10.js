(function() {
    console.log('inside custom script')
    window.addEventListener('message', function(event1) {
        try {
            let event = JSON.parse(event1.data);
            console.log('EVENT RECEIVED temp10', event);
            console.log(event.event_code, "EVENT CODE");
            console.log(event.data.code, "DATA CODE");
            if ("custom-event" == event.event_code && "cb" === event.data.code){
                console.log('value triggered for custom-event', event.event_code);
                document.getElementsByClassName("ym-title")[0].remove();
                document.getElementsByClassName("ym-sub-title")[0].remove();
                var t = document.getElementsByClassName("ym-title-parent");   
                var element = document.createElement("img");
                element.setAttribute("class", "icon1");
                element.style.maxWidth = "200px";
                element.style.margin = '-10px 0 0 -25px'
                element.style.padding = 0;
                element.setAttribute("src", "https://cdn.yellowmessenger.com/JrLTt9MlqGSU1627640891858.PNG");
                t[0].appendChild(element);


            }
            if( "ym-bot-opened" == event.event_code){
                console.log('value triggered for event', event.event_code);
                const frameDocument = window.frames && window.frames.ymIframe && window.frames.ymIframe.document
                frameDocument.getElementsByClassName("title")[0].remove();
                frameDocument.getElementsByClassName("sub-title")[0].remove();
                var x = frameDocument.getElementsByClassName("title-parent");
                console.log(' title execution parent', x);
                var element = frameDocument.createElement("img");
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