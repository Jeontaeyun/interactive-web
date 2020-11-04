# Interactive Web Project

This project is set my sight on making canvas with `Canvas API`.

`Canvas API` is api for making graphical element with HTML, Javascript. It is using for the animation, game graphic, data visualization and operating image or real-time video.

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

## Reference

[01. Canvas API - MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas)
