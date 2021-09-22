import { threadId } from "worker_threads";

export class BeneficiaryDTO {

    public id: string;
    public socialReason: string;

    public constructor(id: string, socialReason: string ){
        this.id=id;
        this.socialReason=socialReason;
    }

}