'use strict';

angular.module('prodapps').provider('prodooMachine',[ function prodooMachineProvider() {

    this.$get = ['$http', 'prodooConfig', function ($http, prodooConfig) {
            return function (payload, qte) {
                var req = {
                    args: ['data', payload.machine.data],
                    kwargs: { }
                };
                $http.post(prodooConfig.pyWebDriver+'/hw_proxy/serial_write', req);
                console.log('Test !!!!', payload);
            };
    }];

    return this;
}])
