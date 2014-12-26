/// <reference path="../_all.ts" />

module $main$.Controllers {
    "use strict";

    export interface I$safeName$CtrlScope extends ng.IScope {
        vm: $safeName$Ctrl
    }
    
    export interface I$safeName$Ctrl {
        greeting: string;      
    }
    
    export class $safeName$Ctrl implements I$safeName$Ctrl {
        static controllerId:string = "$safeNameInst$Ctrl";
        greeting = "Hello";
        
        constructor(private $scope: I$safeName$CtrlScope) {
            $scope.vm = this;
        }
        
    }
    
    $main$.App.Controllers.controller($safeName$Ctrl.controllerId, ["$scope", ($scope) => new $safeName$Ctrl($scope)]);
}