const context = cast.framework.CastReceiverContext.getInstance();

// Update style using javascript
let playerElement = document.getElementsByTagName("cast-media-player")[0];
playerElement.style.setProperty('--splash-image', 'url("http://some/other/image.png")');


context.start();