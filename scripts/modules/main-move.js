export default class MainMove {
    constructor(main, image){
        this.main = document.querySelector(main);
        this.image = document.querySelector(image);
    }
    
    moveImage(e){
        let mainX = this.main.offsetWidth / 2;
        let mainY = this.main.offsetHeight / 2;

        let x = Math.abs((mainX - e.clientX) / 10);
        if (e.clientX > mainX) x = -x;
        
        let y = Math.abs((mainY - e.clientY) / 10);
        if (e.clientY > mainY) y = -y;

        this.image.style.transform = `translate(${x}px, ${y}px)`;
    }
    
    addEventMove(){
        document.body.addEventListener('mousemove', () => {
            this.moveImage(event);
        });
    }
    
    init(){
        if(this.main && this.image){
            this.addEventMove();
        }else{
            return this;
        }
    }
}
