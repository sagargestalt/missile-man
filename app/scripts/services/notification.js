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
    // AngularJS will instantiate a singleton by calling "new" on this function
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
        modalInstance.result.then( function( data ) {
          config.successCallback();
        }, function() {
          config.errorCallback();
        } );
    };

    return {
      handle: handleAction
    }
  }]);
