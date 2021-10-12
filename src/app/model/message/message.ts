import { UserDTO } from "../dtos/userDTO";

export class Message {
    
    public id: string;    
    public dateMessage: Date;
    public subject: string;
    public description: string;
    public user: UserDTO;

        public constructor(dateMessage: Date, subject: string, description: string, user: UserDTO){
                this.dateMessage=dateMessage;
                this.subject=subject;
                this.description=description;
                this.user=user;
        }

}