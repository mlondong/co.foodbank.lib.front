import {Address} from "../address/address";
export class User {
    id: String;
    name: string;
    email: string;
    password: string;
    phones: string;
    state: boolean;
    address?:Address;
}
