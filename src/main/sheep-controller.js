import { Sheep } from "./sheep.js";

export class SheepController {
    constructor() {
        this.img = new Image();
        this.img.onload = () => {
            this.loaded();
        }
        this.img.src = "./asset/sheep.png";

        this.items = [];

        this.cur = 0;
        this.isLoaded = false;
    }

    resize = (stageWidth, stageHeight) => {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    loaded = () => {
        this.isLoaded = true;
        this.addSheep();
    }

    addSheep = () => {
        this.items.push(new Sheep(this.img, this.stageWidth))
    }

    draw = (ctx, t, dots) => {
        if (this.isLoaded) {
            this.cur += 1;
            if (this.cur > 200) {
                this.cur = 0;
                this.addSheep();
            }
            for (let index = this.items.length - 1; index >= 0; index--) {
                const item = this.items[index];
                if (item.x < - item.width) this.items.splice(index, 1);
                else item.draw(ctx, t, dots)
            }
        }
    }
}
