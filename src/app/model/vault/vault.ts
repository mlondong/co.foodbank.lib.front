import { Address } from "../address/address";

export class Vault {
    public id: string;
    public phones: string;
    public contact: string;
    public address: Address;
    public contribution: any[];

    public constructor(phones: string ,contact: string ,address: Address) {
        this.phones=phones;
        this.contact=contact;
        this.address=address;
    }


}
