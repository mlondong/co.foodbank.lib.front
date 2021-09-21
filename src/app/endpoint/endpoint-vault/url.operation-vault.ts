import {endpointFoodBank} from '../endpointFoodbank/url.endpoint-foodbank';

export const operationVault = {
  
    /*PUT OPERATIONS IN VAULT*/
    updateVault: endpointFoodBank.apiUrlVault + '/vault/updateVault/id/', 
    
    /*POST OPERATIONS IN VAULT*/
    createVault : endpointFoodBank.apiUrlVault + '/vault/createVault',
    
    /*GET OPERATIONS IN VAULT*/
    findId : endpointFoodBank.apiUrlVault +'/vault/findById/id/',
    findAll : endpointFoodBank.apiUrlVault +'/vault/findAll/',
    findDistrict : endpointFoodBank.apiUrlVault + '/vault/findDistrict/',
    findByContact : endpointFoodBank.apiUrlVault + '/vault/findContact/name/',
    
    
   

} 