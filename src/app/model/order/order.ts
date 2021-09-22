import { BeneficiaryDTO } from "../dtos/beneficiaryDTO";
import { Beneficiary } from "../user/beneficiary"

export class Order {
    public dateOrder: Date;
    public beneficiary: BeneficiaryDTO;

    public constructor(dateOrder: Date, beneficiary: BeneficiaryDTO){
        this.dateOrder=dateOrder;
        this.beneficiary=beneficiary;
    }

}