import {
    Hill
} from "./hill.js"

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.hills = [
            new Hill("#ff4674", 0.6, 10),
            new Hill("#ff59c2", 1.0, 8),
            new Hill("#fd6bea", 1.6, 6),
        ]

        window.addEventListener("resize", this.resize, false)
        this.resize();

        requestAnimationFrame(this.animate)
    }

    resize = () => {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        /**
         * 캔버스의 Size를 2배로 해줘서 레티나 디스플레이 지원
         */
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2)

        for (let i = 0; i < this.hills.length; i++) {
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }
    }

    // Canvas를 지워주는 코드
    animate = (time) => {
        requestAnimationFrame(this.animate);

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

        let dots;
        for (let i = 0; i < this.hills.length; i++) {
            dots = this.hills[i].draw(this.ctx)
        }
    }
}

window.onload = () => {
    new App();
}