import { Country } from "../country/country";

export class Address {
    public streetName: string;
    public streetNumber: string;
    public postalCode: string;
    public district: string;
    public country: Country;

    public constructor(streetName: string, streetNumber: string, postalCode: string, district: string, country: Country ) {
        this.streetName=streetName;
        this.streetNumber=streetNumber;
        this.postalCode=postalCode;
        this.district=district;
        this.country=country;
    }

    
}
