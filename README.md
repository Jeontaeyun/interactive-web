# Interactive Web Project

This project is set my sight on making canvas with `Canvas API`.

`Canvas API` is api for making graphical element with HTML, Javascript. It is using for the animation, game graphic, data visualization and operating image or real-time video.

### The goal of this project

1.  Using `Canvas API`
2.  Image sprite
3.  Adjusting fixed FPS
4.  Studying to calculate coordinates in curve

## Getting started

Below code is basic Javascript code for using `Canvas API`

```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 01. Select fill style of object
ctx.fillStyle = "black";
// 02. Draw rectangular x: 10, y: 10, width: 150, height: 100
ctx.fillRect(10, 10, 150, 100);
```

`<canvas>` Element create drawing area which has fixed size and expose one or more `rendering contexts` which is need to handle canvas.

## `window.requestAnimationFrame()` method

`requestAnimationFrame()` is

## Reference

[01. Canvas API - MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas)
[02. window.requestAnimationFrame API - MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame)
[03. CanvasRenderingContext2D.quadraticCurveTo() API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
[04. CanvasRenderingContext2D.beginToPath() API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)
[05. Youtube reference for this project](https://www.youtube.com/watch?v=hCHL7sydzn0&t=264s)
[06. Stack Overflow - Draw a line with gradient in canvas ](https://stackoverflow.com/questions/45789186/draw-a-line-with-gradient-in-canvas)
