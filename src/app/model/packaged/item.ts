import { ContributionPK } from "../dtos/contributionPK"
import { ProductPK } from "../dtos/productPK"

export class Item {

    public quantity: string;
    public contribution: ContributionPK;
    public product: ProductPK;

    public constructor(quantity: string, contribution: ContributionPK, product: ProductPK) {
        this.quantity = quantity;
        this.contribution = contribution;
        this.product = product;
    }

}