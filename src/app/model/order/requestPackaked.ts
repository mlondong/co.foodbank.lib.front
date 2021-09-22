import { RequestItem } from "./requestItem";
import { StatePackaged } from "./requestStatePackage";

export class RequestPackaged {

    public idPackaged: string;
    public item: Array<RequestItem>;
    public units: number;
    public datePackage: Date;
    public state: StatePackaged;

    public constructor(id: string, item: Array<RequestItem>, units: number, datePackage: Date, state: StatePackaged){
        this.idPackaged=id;
        this.item=item;
        this.units=units;
        this.datePackage=datePackage;
        this.state=state
    }

}