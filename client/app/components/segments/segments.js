import angular from 'angular';
import 'ng-file-upload';
import template from './segments.html';
import segmentDetails from './segmentDetails.tpl.html';
import segmentsController from './segments.controller';
import segmentsDetailController from './segmentsDetail.controller';

let segmentsModule = angular.module('segments', [
  'ngFileUpload'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('segments', {
      url: '/segments',
      template: template,
      controller: 'SegmentsController',
      controllerAs: 'vm'
    })
    .state('segments.detail', {
      url: '/:id',
      views: {
        'detail': {
          template: segmentDetails,
          controller: 'SegmentsDetailController',
          controllerAs: 'vm'
        }
      }
    });
})

.controller('SegmentsController', segmentsController)
.controller('SegmentsDetailController', segmentsDetailController);

export default segmentsModule;
