export class product{

    img: any;
    name:string;
    description:string;
    price:number;
    producer: string;
    count: number;
    

constructor(img: any, name:string, description:string, price: number, producer:string){
    
    this.img= img;
    this.name= name;
    this.description= description;
    this.price= price;
    this.producer= producer;
    this.count=0;

}
}