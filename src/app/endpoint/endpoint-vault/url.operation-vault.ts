import {endpointFoodBank} from '../endpointFoodbank/url.endpoint-foodbank';

export const operationVault = {
  
    /*PUT OPERATIONS IN VAULT*/
    updateVault: endpointFoodBank.apiUrlVault + '/vault/updateVault/id/', 
    
    /*POST OPERATIONS IN VAULT*/
    createGeneralContribution : endpointFoodBank.apiUrlVault + '/vault/add-GeneralContribution/vault-id/',
    createDetailContribution : endpointFoodBank.apiUrlVault + '​/vault​/add-DetailContribution​/vault-id​/',

    
    /*GET OPERATIONS IN VAULT*/
    findId : endpointFoodBank.apiUrlVault +'/vault/findById/id/',
    findAll : endpointFoodBank.apiUrlVault +'/vault/findAll/',
    findDistrict : endpointFoodBank.apiUrlVault + '/vault/findDistrict/',
    findByContact : endpointFoodBank.apiUrlVault + '/vault/findContact/name/',
    
    
   

} 