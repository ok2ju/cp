import angular from 'angular';
import 'angular-ui-router';
import 'restangular';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Resources from './resources/resources';

angular.module('app', [
    'ui.router',
    'restangular',
    Common.name,
    Components.name,
    Resources.name
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider, RestangularProvider) => {
    "ngInject";

    RestangularProvider.setBaseUrl('http://56f781f97cd9c81100dd8f8e.mockapi.io/api/v1');

    RestangularProvider.setRestangularFields({
      id: "_id"
    });

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        template: '<div ui-view></div>'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
