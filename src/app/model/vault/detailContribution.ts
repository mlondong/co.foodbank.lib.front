
export class DetailContribution{
        public description: string;
        public date: Date;
        public codeBar: string;
        public numOfPackage: string;

        public constructor( description: string, date: Date , codeBar: string ,numOfPackage: string){
            this.description=description;
            this.date=date;
            this.codeBar=codeBar;
            this.numOfPackage=numOfPackage;
        }
  
}