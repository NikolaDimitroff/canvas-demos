var Mouser = {
    installHandler: function (canvas) {
    
        window.mouse = new Vector2();
        
        window.addEventListener("mousemove", function (event) {
            var rect = canvas.getBoundingClientRect();
            window.mouse = new Vector2(
                event.clientX - rect.left,
                event.clientY - rect.top
            )
        }, false);
    }
}