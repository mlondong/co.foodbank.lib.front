import {endpointFoodBank} from '../endpointFoodbank/url.endpoint-foodbank';

export const operationUser = {
  
    /*PUT OPERATIONS IN USER*/
    updateVolunteer: endpointFoodBank.apiUrlUser + '/user/updateVolunter/', 
    updateProvider : endpointFoodBank.apiUrlUser +'/user/updateProvider/',
    updateBeneficiary : endpointFoodBank.apiUrlUser + '​/user/updateBeneficiary/',

    /*POST OPERATIONS IN USER*/
    createVolunteer : endpointFoodBank.apiUrlUser + '/user/createVolunter',
    createVaultProvider : endpointFoodBank.apiUrlUser + '/user/createVaultInProvider/',
    createProvider : endpointFoodBank.apiUrlUser + '/user/createProvider',
    createBeneficiary : endpointFoodBank.apiUrlUser + '/user/createBeneficiary',

    /*GET OPERATIONS IN USER*/
    findVolunteer : endpointFoodBank.apiUrlUser + '/user/findVolunteer',
    findBySucursal : endpointFoodBank.apiUrlUser + '/user/findBySucursal/',
    findById : endpointFoodBank.apiUrlUser + '/user/findById/',
    findByEmail : endpointFoodBank.apiUrlUser + '/user/findByEmail/', 
    findByDni : endpointFoodBank.apiUrlUser + '/user/findByDni/',
    findByCuit : endpointFoodBank.apiUrlUser + '/user/findByCuit/',
    findByBeneficiary : endpointFoodBank.apiUrlUser + '/user/findBeneficiary',
    findAll : endpointFoodBank.apiUrlUser + '/user/findAll'

} 