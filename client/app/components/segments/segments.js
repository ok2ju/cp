import angular from 'angular';
import 'ng-file-upload';
import 'ng-tags-input';
import template from './segments.html';
import segmentDetails from './segmentDetails.tpl.html';
import segmentsController from './segments.controller';
import segmentsDetailController from './segmentsDetail.controller';

let segmentsModule = angular.module('segments', [
  'ngFileUpload',
  'ngTagsInput'
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home.segments', {
      url: 'segments',
      template: template,
      controller: 'SegmentsController',
      controllerAs: 'vm',
      data: {
        pageTitle: 'Segments'
      }
    })
    .state('home.segments.detail', {
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
