import angular from 'angular';
import 'angular-drag-and-drop-lists';
import template from './podcast.tpl.html';
import podcastController from './podcast.controller';


let podcastModule = angular.module('podcast', [
  'dndLists'
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home.podcast', {
      url: 'podcast',
      template: template,
      controller: 'PodcastController',
      controllerAs: 'vm',
      data: {
        pageTitle: 'Create podcast'
      }
    });

})

.controller('PodcastController', podcastController);

export default podcastModule;
