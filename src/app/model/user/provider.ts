import { Address } from "../address/address";

/*Class to represent a Provider*/

export class Providerr {
    public id: string;
    public name: string;
    public  email: string;
    public password: string;
    public phones: string;
    public cuil: string;
    public legalRepresentation: string;
    public address: Address;
    public state: boolean;
    public sucursal: [];
    
    

   public constructor(name: string, email: string, password: string, phones: string, cuil: string, legalRepresentation: string , address: Address) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.phones=phones;
        this.cuil=cuil;
        this.legalRepresentation=legalRepresentation;
        this.address=address;
    }

    
}

