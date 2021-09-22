import { ContributionPK } from "../dtos/contributionPK";
import { ProductPK } from "../dtos/productPK";

export class Stock {

    public dateStock: Date;
    public quantity: string;
    public contribution: ContributionPK;
    public product: ProductPK;

    public constructor(date: Date, quantity: string, contribution: ContributionPK, product: ProductPK) {
        this.dateStock = date;
        this.quantity = quantity;
        this.contribution = contribution;
        this.product = product;
    }

}