import angular from 'angular';
import 'angular-ui-router';
import 'restangular';
import 'angular-toastr';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Resources from './resources/resources';

angular.module('app', [
    'ui.router',
    'restangular',
    'toastr',
    Common.name,
    Components.name,
    Resources.name
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider, RestangularProvider, toastrConfig) => {
    "ngInject";

    RestangularProvider.setBaseUrl('http://56f781f97cd9c81100dd8f8e.mockapi.io/api/v1');

    RestangularProvider.setRestangularFields({
      id: "_id"
    });

    angular.extend(toastrConfig, {
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 0,
      newestOnTop: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      target: 'body'
    });

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<div ui-view></div>',
        resolve: {
          segmentsResource: 'segmentsResource',

          segments(segmentsResource) {
            return segmentsResource.list();
          }
        },
        redirectTo: 'home.segments',
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .run(($rootScope, $state) => {
    "ngInject";

    $rootScope.$on('$stateChangeStart', function(e, to, params) {
      if(to.redirectTo) {
        e.preventDefault();
        $state.go(to.redirectTo, params);
      }
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (angular.isDefined(toState.data.pageTitle)) {
        $rootScope.pageName = toState.data.pageTitle;
      }
    });
  })

  .component('app', AppComponent);
