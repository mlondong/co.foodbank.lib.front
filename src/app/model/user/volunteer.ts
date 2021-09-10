import { Address } from "../address/address";
import { Vehicule } from "../vehicule/vehicule";

/**
 * Class to represent a Volunteer.
*/

export class Volunteer {
    name: string;
    email: string;
    password: string;
    phones: string;
    dni: string;
    vehicule: Vehicule;
    address: Address;
 }
