import angular from 'angular';
import template from './podcast.tpl.html';
import podcastController from './podcast.controller';


let podcastModule = angular.module('podcast', [])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('podcast', {
      url: '/podcast',
      template: template
    });

  /*$stateProvider
    .state('segments', {
      url: '/segments',
      template: template,
      resolve: {
        segmentsResource: 'segmentsResource',

        segments(segmentsResource) {
          return segmentsResource.list();
        }
      },
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
    });*/
})

.controller('PodcastController', podcastController);

export default podcastModule;
