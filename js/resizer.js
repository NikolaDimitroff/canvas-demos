Resizer = {
    installHandler: function installHandler(canvas) {
        function onresize() {
                canvas.width = document.body.offsetWidth;
                canvas.height = document.body.offsetHeight;
                window.aspect = canvas.width / canvas.height;
        };
        onresize();
        window.onresize = onresize;
    }
}