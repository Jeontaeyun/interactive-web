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
if (!canvas.getContext) {
  // canvas-unsupported logic
}

const ctx = canvas.getContext("2d");

// 01. Select fill style of object
ctx.fillStyle = "black";
// 02. Draw rectangular x: 10, y: 10, width: 150, height: 100
ctx.fillRect(10, 10, 150, 100);
```

`<canvas>` Element create drawing area which has fixed size and expose one or more `rendering contexts` which is need to handle canvas.

## `window.requestAnimationFrame()` method

`requestAnimationFrame()` is async function for animating canvas svg or html element.
This function basically is called **60/1sec** or is depended on monitor scan rate.

This mean if monitor scan rate is 140FPS, `requestAnimationFrame()` called 140/1sec.

## Canvas API

| method                                                              | description                                                                                                 |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| drawImage(image, dx, dy)                                            | Draw image with `dx`, `dy`                                                                                  |
| drawImage(image, dx, dy, dWidth, dHeight)                           | Draw image with `dx`, `dy`, `dWidth`, `dHeight`                                                             |
| drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight ) | Draw image for image sprite with `sx`, `sy, `sWidth`, `sHeight`, `dx`, `dy`, `dWidth`, `dHeight`            |
| clearRect(x0, y0, x1, y1)                                           | Remove canvas with rectangular area with (x0, y0), (x1, y1)                                                 |
| beginPath()                                                         | To start a new path by emptying this list of sub-paths. Call this method when you want to create a new path |
| moveTo(x,y)                                                         | Just move path point with no drawing                                                                        |
| closePath()                                                         | Close path with connecting last point and start point linearly                                              |
| lineTo(x, y)                                                        | Draw line path from current point to `(x, y)`                                                               |
| arc(x, y, radius, startAngle, endAngle, [anticlockwise])            | Arc with (x,y) center point, `r` radius                                                                     |
| quadraticCurveTo(cp1x, cp1y, x, y)                                  | Quadratic Curve method                                                                                      |
| fillRect(x, y, width, height)                                       | Draw filled rectangular                                                                                     |
| strokeRect(x, y, width, height)                                     | Draw out line of rectangular                                                                                |

## PIXI.js

`PIXI.js` is the HTML5 creation engine with 2D WebGL renderer. It have 3 main specificity, `Fast`, `Flexible`, `Free`.

## Reference

[01. Canvas API - MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas)  
[02. window.requestAnimationFrame API - MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame)  
[03. CanvasRenderingContext2D.quadraticCurveTo() API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)  
[04. CanvasRenderingContext2D.beginToPath() API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)  
[05. Youtube reference for this project](https://www.youtube.com/watch?v=hCHL7sydzn0&t=264s)  
[06. Stack Overflow - Draw a line with gradient in canvas ](https://stackoverflow.com/questions/45789186/draw-a-line-with-gradient-in-canvas)  
[07. CanvasRenderingContext2D save() and restore() ](https://www.tutorialspoint.com/What-are-save-and-restore-methods-in-HTML5-Canvas)  
[08. Canvas Tutorial](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial)  
[09. Bezier Curves](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#:~:text=A%20B%C3%A9zier%20curve%20)  
[10. How to handle canvas click event](https://webisfree.com/2018-05-31/[html5]-canvas-%EC%9A%94%EC%86%8C%EC%9D%98-%EB%8F%84%ED%98%95%EC%97%90-%ED%81%B4%EB%A6%AD-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)  
[11. PIXI.js Document](https://www.pixijs.com/)
