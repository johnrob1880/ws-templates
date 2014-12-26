/// <reference path="../_all.ts" />

module $main$.Directives {

    export interface I$safeName$ extends ng.IDirective {      
    }
    
    export interface I$safeName$Scope extends ng.IScope {
    }
    
    export class $safeName$ implements I$safeName$ {
        restrict:string = "A";
        
        constructor(private $window: ng.IWindowService) {}
        
        link = (scope: I$safeName$Scope, element:JQuery, attrs) => {
            //todo: Implement
        }
    }
    
    Main.App.Directives.directive('$safeNameInst$', ["$window", ($window) => new $safeName$($window)]);
}