import { endpointFoodBank } from "../endpointFoodbank/url.endpoint-foodbank";

export const operationProduct= {
    /*GET*/
    findAll: endpointFoodBank.apiUrlProduct + '/product/findAll', 
    findById: endpointFoodBank.apiUrlProduct + '​/product​/findBy​/', 
    searchByName: endpointFoodBank.apiUrlProduct + '/product/searchByName/', 
   
    /*POST*/
    create: endpointFoodBank.apiUrlProduct + '/product/create/', 
   
    /*POST*/
    update: endpointFoodBank.apiUrlProduct + '​/product​/update​/', 
    
}