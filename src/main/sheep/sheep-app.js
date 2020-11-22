import { Hill } from "../hill.js"
import { SheepController } from "../sheep-controller.js";
import { Sun } from "../sun.js";

export class CanvasApp {
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
        this.sun = new Sun(200);

        window.addEventListener("resize", this.resize, false)
        this.resize();

        this.canvasClickEventHandler()
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
        this.sun.resize(this.stageWidth, this.stageHeight)
    }

    /**
     * Canvas를 지워주는 코드
     * time은 FPS를 위한 타임스탬프
     * requestAnimationFrame은 타임스탬프를 파라미터로 넘겨받는데 이를 통해 FPS를 정의할 수 있다.
     */
    animate = (time) => {
        requestAnimationFrame(this.animate);

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

        this.sun.draw(this.ctx);

        for (let hillIndex = 0; hillIndex < this.hills.length; hillIndex++) {
            this.dots = this.hills[hillIndex].draw(this.ctx)
        }

        this.sheepController.draw(this.ctx, time, this.dots)
    }

    canvasClickEventHandler = () => {
        this.canvas.addEventListener("mousedown", (event) => {
            this.sheepController.items.some(item => {
                if (event.pageX > item.x && event.pageX < item.x + item.imgWidth && event.pageY < item.y && event.pageY > item.y - item.sheepHeight) {
                    item.isClicked = true;
                    return true;
                }
                return false;
            })
        })
        this.canvas.addEventListener("mousemove", (event) => {
            this.sheepController.items.forEach(item => {
                if (!item.isClicked) return;
                item.x = event.pageX;
                const closest = item.getY(event.pageX, this.dots)
                if (closest.y > event.pageY) item.y = event.pageY;
                else item.y = closest.y
            })
        })
        this.canvas.addEventListener("mouseup", (event) => {
            this.sheepController.items.forEach(item => {
                if (!item.isClicked) return;
                item.isClicked = false;
                item.x = event.pageX;
            })
        })
    }
}
