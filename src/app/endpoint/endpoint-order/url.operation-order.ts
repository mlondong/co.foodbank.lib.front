import { endpointFoodBank } from "../endpointFoodbank/url.endpoint-foodbank";


export const operationOrder ={

     /*GET OPERATIONS FOR STOCK*/
     findAll : endpointFoodBank.apiUrlOrder+'/order/findAll',
     findById : endpointFoodBank.apiUrlOrder+'/order/findById/',

     pathState:'/change-stateOrder/id/',
     pathOption: '/option/',
     changeState : endpointFoodBank.apiUrlOrder,
     
    //POST
     create : endpointFoodBank.apiUrlOrder+'​/order​/create',
     addVolunteer : endpointFoodBank.apiUrlOrder+'​/order​/add-Volunter​/id​/',
     addPackaged : endpointFoodBank.apiUrlOrder+'/order/add-Package/id/',
     addMessage : endpointFoodBank.apiUrlOrder+'/order/add-Message/id/',
     
    //DELETE
    removePackaged: endpointFoodBank.apiUrlOrder+'​​/order​/remove-Package​/id​/',
}