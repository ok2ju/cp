import angular from 'angular';
import 'angular-ui-router';
import 'restangular';
import Common from './common/common';
import Components from './components/components';
import Resources from './resources/resources';
import AppComponent from './app.component';

angular.module('app', [
    'ui.router',
    'restangular',
    Common.name,
    Components.name,
    Resources.name
  ])
  .config(($locationProvider, RestangularProvider) => {
    "ngInject";
    RestangularProvider.setBaseUrl('http://56f781f97cd9c81100dd8f8e.mockapi.io/api/v1');
    RestangularProvider.setRestangularFields({
      id: "_id"
    });
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
