export class Sun {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    draw = (ctx) => {
        ctx.save();
        ctx.fillStyle = "#0000"
        ctx.beginPath();
        ctx.arc(0, 0, 3000, 0, 2 * Math.PI)
        ctx.clearPath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}