import {
    Hill
} from "./hill.js"

class App{
    constructor(){
        this.canvas =document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.hills = [
            new Hill("#ff4674", 1.4, 6)
        ]

        window.addEventListener("resize" , this.resize.bind(this),false)

        this.resize();

    }

    resize = () => {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2)
        
        this.hills[0].resize(this.stageWidth, this.stageHeight);
        setTimeout(()=>{
            this.hills[0].draw(this.ctx)
        },2000)
 
    }
}

new App()