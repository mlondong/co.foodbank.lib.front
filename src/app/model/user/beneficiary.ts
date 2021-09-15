import { Address } from "../address/address";

/*Class to represent information about Beneficiary*/
export class Beneficiary {
    public id: String;
    public name?: string;
    public email: string;
    public password: string;
    public phones: string;
    public socialReason: string;
    public category: string;
    public size: string;
    public address: Address;

    public constructor(name: string, email: string, password: string, phones: string, socialReason: string, category: string, size: string, address: Address) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.phones=phones;
        this.socialReason=socialReason;
        this.category=category;
        this.size=size;
        this.address=address;
    }
}
