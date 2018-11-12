export class product{

    image: any;
    name:string;
    description:string;
    price:number;
    

constructor(image: any, name:string, description:string, price: number){
    
    this.image= image;
    this.name= name;
    this.description= description;
    this.price= price;
}
}