export class Sun {
    constructor(radius) {
        this.radius = radius;
        this.color = "#fe9867"
        this.marginTop = 100
    }

    resize = (stageWidth, stageHeight) => {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw = (ctx) => {
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.stageWidth - this.radius, this.radius + this.marginTop, this.radius, 0, 2 * Math.PI)
        ctx.fill();
    }
}