import { Address } from "../address/address";

/*Class to represent information about Beneficiary*/
export class Beneficiary {
    name: string;
    email: string;
    password: string;
    phones: string;
    socialReason: string;
    category: string;
    size: string;
    address:Address;
}
