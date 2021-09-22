export class RequestProduct {
    public id: string;
    public dateExpiraton: Date;
    public name: string
    public description: string
    public brand: string

    public constructor(id: string ,dateExpiraton: Date, name: string , description: string, brand: string){
        this.id=id;
        this.dateExpiraton=dateExpiraton;
        this.name=name;
        this.description=description;
        this.brand=brand;
    }
}