import angular from 'angular';
import 'ng-file-upload';
import template from './segments.html';
import segmentsController from './segments.controller';

let segmentsModule = angular.module('segments', [
  'ngFileUpload'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('segments', {
      url: '/',
      template: template,
      controller: 'SegmentsController',
      controllerAs: 'vm'
    });
})

.controller('SegmentsController', segmentsController);

export default segmentsModule;
