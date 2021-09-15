import {endpointUser} from './url.endpoint-user';

export const operationUser = {
  
    /*PUT OPERATIONS IN USER*/
    updateVolunteer: endpointUser.apiUrlUser + '/user/updateVolunter/', 
    updateProvider : endpointUser.apiUrlUser +'/user/updateProvider/',
    updateBeneficiary : endpointUser.apiUrlUser + '/user/updateBeneficiary/',

    /*POST OPERATIONS IN USER*/
    createVolunteer : endpointUser.apiUrlUser + '/user/createVolunter',
    createVaultProvider : endpointUser.apiUrlUser + '/user/createVaultInProvider/',
    createProvider : endpointUser.apiUrlUser + '/user/createProvider',
    createBeneficiary : endpointUser.apiUrlUser + '/user/createBeneficiary',

    /*GET OPERATIONS IN USER*/
    findVolunteer : endpointUser.apiUrlUser + '/user/findVolunteer',
    findBySucursal : endpointUser.apiUrlUser + '/user/findBySucursal/',
    findById : endpointUser.apiUrlUser + '/user/findById/',
    findByEmail : endpointUser.apiUrlUser + '/user/findByEmail/', 
    findByDni : endpointUser.apiUrlUser + '/user/findByDni/',
    findByCuit : endpointUser.apiUrlUser + '/user/findByCuit/',
    findByBeneficiary : endpointUser.apiUrlUser + '/user/findBeneficiary',
    findAll : endpointUser.apiUrlUser + '/user/findAll'

} 