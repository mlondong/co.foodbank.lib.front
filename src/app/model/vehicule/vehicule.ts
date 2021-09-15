import { Volume } from "../volume/volume";
export class Vehicule {

    public type: string;
    public brand: string;
    public carPLate: string;
    public capacity: string;
    public volume: Volume;

    public constructor(type : string, brand: string, carPLate: string, capacity: string, volume: Volume) {
        this.type=type;
        this.brand=brand;
        this.carPLate=carPLate;
        this.capacity=capacity;
        this.volume=volume;
    }
}
