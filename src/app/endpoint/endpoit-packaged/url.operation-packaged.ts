import { endpointFoodBank } from "../endpointFoodbank/url.endpoint-foodbank";

export const operationPackaged = {
    
    //GET OERATIONS
    findAll : endpointFoodBank.apiUrlPackaged + '/packaged/findAll',
    findByDate : endpointFoodBank.apiUrlPackaged + '​/packaged​/findByDate​/',
    findById : endpointFoodBank.apiUrlPackaged + '/packaged/findById/',


    /*ESTE PARA UPDATEAR ESTADO CHECK THIS */
    pathUpdate: '/updateState/id/',
    pathOption: '/option/',
    updateState:  endpointFoodBank.apiUrlPackaged +'/packaged/',

    //POST OERATIONS
    addItem : endpointFoodBank.apiUrlPackaged + '/packaged/addItem/id-packaged/',
    create : endpointFoodBank.apiUrlPackaged + '/packaged/create',
    
    //DELETE OERATIONS
    delete : endpointFoodBank.apiUrlPackaged + '/packaged/removeProduct/id-packaged/',
   
    
}