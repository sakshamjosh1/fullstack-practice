class rectangle{
    constructor(length,width,color){
        this.width=width;
        this.length=length;
        this.color=color;
    }
    
    area(){
        const area = this.width * this.length;
        return area;
    }
    paint(){
        console.log(`Panting this with color ${this.color}`);
    }
}

const rect = new rectangle(2,4,'red');
const area = rect.area();
const paint = rect.paint();

console.log(area);
console.log(paint);
