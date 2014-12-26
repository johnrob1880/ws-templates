/// <reference path="../../typings/tsd.d.ts" />

module Tests {
    "use strict";

    describe("$describe$", () => {
        var scope;

        beforeEach(() => {
            angular.mock.module('$module$');
        });
        beforeEach(angular.mock.inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            $controller('$describeInst$', {$scope: scope});
        }));

        // tests
        it('should have "Hello World!" text', function () {
            expect(scope.greeting).toBe("Hello World!");
        });

    })
}