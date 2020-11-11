import { Hill } from "./hill.js"
import { SheepController } from "./sheep-controller.js";
import { Sun } from "./sun.js";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.hills = [
            new Hill("#ff4674", 0.6, 4),
            new Hill("#ff59c2", 1.0, 6),
            new Hill("#fd6bea", 1.6, 10),
        ]

        this.sheepController = new SheepController();
        this.sun = new Sun(100, 100);

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

        this.sheepController.resize(this.stageWidth, this.stageHeight);
    }

    /**
     * Canvas를 지워주는 코드
     * time은 FPS를 위한 타임스탬프
     * requestAnimationFrame은 타임스탬프를 파라미터로 넘겨받는데 이를 통해 FPS를 정의할 수 있다.
     */
    animate = (time) => {
        requestAnimationFrame(this.animate);

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

        let dots;
        for (let hillIndex = 0; hillIndex < this.hills.length; hillIndex++) {
            dots = this.hills[hillIndex].draw(this.ctx)
        }

        this.sheepController.draw(this.ctx, time, dots)
        this.sun.draw();
    }
}

window.onload = () => {
    new App();
}