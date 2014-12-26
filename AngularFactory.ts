/// <reference path="../_all.ts" />

module $main$.Services {

    export interface I$safeName$Service {
        serviceId: string;
        get: () => void;        
    }
    
    export class $safeName$Service implements I$safeName$Service {
        serviceId:string = "$safeName$Service";
        
        constructor(private $http: ng.IHttpService) {}
        
        get():void {
            // do something
        }
    }
    
    Main.App.Services.factory('$safeNameInst$Service', ["$http", ($http) => new $safeName$Service($http)]);
}