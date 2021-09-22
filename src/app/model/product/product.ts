
export class Product {

    public name: string;
    public description: string;
    public brand: string;
    public dateExpiraton: Date;
    public expectedStorageLife: string;
    public storageTemperature: string;
    public requiredRefrigeration: boolean;

    public constructor(name: string, description: string, brand: string, dateExpiraton: Date,
        expectedStorageLife: string, requiredRefrigeration: boolean) {

            this.name=name;
            this.description=description;
            this.brand=brand;
            this.dateExpiraton=dateExpiraton;
            this.expectedStorageLife=expectedStorageLife;
            this.requiredRefrigeration=requiredRefrigeration;
    }
}