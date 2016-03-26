import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fileUpload from 'ng-file-upload';
import segmentsComponent from './segments.component';

let segmentsModule = angular.module('segments', [
  uiRouter,
  fileUpload
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('segments', {
      url: '/',
      template: '<segments></segments>'
    });
})

.component('segments', segmentsComponent);

export default segmentsModule;
