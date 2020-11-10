export class Sheep {
    constructor(img, stageWidth) {
        this.img = img;

        this.totalFrame = 8;
        this.curFrame = 0;

        this.imgWidth = 360;
        this.imgWidth = 300;

        this.sheepWidth = 180;
        this.sheepHeight = 150;

        this.sheepWidthHalf = this.sheepWidth / 2;
        this.x = stageWidth + this.sheepWidth;
        this.y = 0;
        this.speed = Math.random() * 2 + 1;

        this.fps = 24;
        this.fpsTime = 1000 / this.fps

    }
}