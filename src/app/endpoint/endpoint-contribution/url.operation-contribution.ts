import { endpointFoodBank } from "../endpointFoodbank/url.endpoint-foodbank";


export const operationContribution = {

 /*GET OPERATIONS IN Contribution*/
 findAll: endpointFoodBank.apiUrlContribution + '/contribution/findAll', 
 findByCode : endpointFoodBank.apiUrlContribution +'/contribution/codeBar/',
 findById : endpointFoodBank.apiUrlContribution +'/contribution/id/',
 
 /*este paraqchequear OJO*/
 pathIdState:'/contribution/upState/',
 pathOption:'/option/',
 updateState : endpointFoodBank.apiUrlContribution,


 /*PUT OPERATIONS IN Contribution*/
 updateDetailContribution : endpointFoodBank.apiUrlContribution +'​/contribution​/updateDetailContribution​/',
 updateGeneralContribution : endpointFoodBank.apiUrlContribution +'/contribution/updateGeneralContribution/',

 /*POST OPERATIONS IN Contribution*/
 /*all operations to create contribution is handle by vault service*/

}