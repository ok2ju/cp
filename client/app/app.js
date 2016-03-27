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
    Components.name
  ])
  .config(($locationProvider) => {
    "ngInject";

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
