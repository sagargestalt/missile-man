'use strict';

/**
 * @ngdoc service
 * @name missileManApp.notification
 * @description
 * # notification
 * Service in the missileManApp.
 */
angular.module('missileManApp')
  .service('csNotication', ['$modal', function ($modal) {
    var handleAction;

    handleAction = function( config ) {
        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'views/modal/notification.html',
          controller: 'ModalInstanceCtrl',
          resolve: {
            config: function() {
              return config;
            },
            successCallback: function() {
              return config.successCallback;
            }
          }
        });
        // modalInstance.result.then( function( data ) {
        modalInstance.result.then( function() {
          config.successCallback();
        }, function() {
          config.errorCallback();
        } );
    };

    return {
      handle: handleAction
    };
  }]);
