import { endpointFoodBank } from "../endpointFoodbank/url.endpoint-foodbank";

export const operationMessage = {

    /*CREATE OPERATIONS MESSAGE*/
    create: endpointFoodBank.apiUrlMessage + '​/message​/create',

    /*GET OPERATIONS FOR MESSAGE*/
    findById: endpointFoodBank.apiUrlMessage + '/message/findById/',
    findAll: endpointFoodBank.apiUrlMessage + '/message/findAll',



}