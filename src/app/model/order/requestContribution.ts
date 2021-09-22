import { Statement } from "@angular/compiler";
import { Volume } from "../volume/volume";
import { StateContribution } from "./requestStateContribution";

export class RequestContribution {
    public id: string;
    public description: string;
    public date: Date;
    public codeBar: string;
    public numOfPackage: number;
    public state: StateContribution;
    public volume: Volume;

    public constructor(id: string, description: string, date: Date, codeBar: string, numOfPackage: number,
        state: StateContribution, volume: Volume) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.codeBar = codeBar;
        this.numOfPackage = numOfPackage;
        this.state = state;
        this.volume = volume;
    }

}