import { Address } from "../address/address";
import { Vehicule } from "../vehicule/vehicule";

/**
 * Class to represent a Volunteer.
*/

export class Volunteer {
    public id: String;
    public name?: string;
    public email: string;
    public password: string;
    public phones: string;
    public dni: string;
    public vehicule: Vehicule;
    public address: Address;

    public constructor(name: string, email: string, password: string, phones: string, dny: string, vehicule: Vehicule, address: Address) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.phones=phones;
        this.dni=dny;
        this.vehicule=vehicule;
        this.address=address;
    }
}
