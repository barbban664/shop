export class product{

    image: any;
    name:string;
    description:string;
    price:number;
    producer: string;
    

constructor(image: any, name:string, description:string, price: number, producer:string){
    
    this.image= image;
    this.name= name;
    this.description= description;
    this.price= price;
    this.producer= producer;
}
}