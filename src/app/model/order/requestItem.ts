import { RequestContribution } from "./requestContribution";
import { RequestProduct } from "./requestProduct";

export class RequestItem{
    public product: RequestProduct;
    public contribution: RequestContribution;
    public units: number;

    public constructor(product: RequestProduct,contribution: RequestContribution, units: number ){
        this.product=product;
        this.contribution=contribution;
        this.units=units;
    }
}