(function() {
    'use strict';

    angular
        .module('app.login')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', 'logger', 'Base64', 'apiEndpoints'];

    /* @ngInject */
    function loginService($http, logger, Base64, apiEndpoints) {
        var service = {
            login: login
        };

        return service;

        function login(data) {

            return $http({
              method : 'POST',
              url    : apiEndpoints.path.login,
              data   : data
            });
        }
    }
})();
