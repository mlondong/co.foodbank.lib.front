import { Volume } from "../volume/volume"

export class GeneralContribution{

        public description : string;
        public date: Date;
        public volume: Volume;
       
        public constructor(description : string,  date: Date ,volume: Volume){
            this.description=description;
            this.date=date;
            this.volume=volume;
        }
}