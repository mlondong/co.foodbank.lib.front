import { endpointFoodBank } from "../endpointFoodbank/url.endpoint-foodbank";


export const operationStock = {

    /*GET OPERATIONS FOR STOCK*/
    findAll : endpointFoodBank.apiUrlStock+'/stock/findAll',
    findById : endpointFoodBank.apiUrlStock+'/stock/findById/',
    findContributionInStock : endpointFoodBank.apiUrlStock+'/stock/findContributionById/id/',
    findProductInStock : endpointFoodBank.apiUrlStock+'/stock/findProductById/id/',
    searchProduct : endpointFoodBank.apiUrlStock+'/stock/searchProducts/name/',
     

    /*PUT OPERATIONS FOR STOCK*/
    update : endpointFoodBank.apiUrlStock+'/stock/update/id-stock/',
    /*POST OPERATIONS FOR STOCK*/
    create : endpointFoodBank.apiUrlStock+'/stock/create',
}