export class product{

    img: any;
    name:string;
    description:string;
    price:number;
    producer: string;
    count: number;
    id: number;
    tags: string;
    

constructor(img: any, name:string, description:string, price: number, producer:string, id: number, tags: string){
    
    this.img= img;
    this.name= name;
    this.description= description;
    this.price= price;
    this.producer= producer;
    this.count=0;
    this.id = id;
    this.tags= tags;

}
}