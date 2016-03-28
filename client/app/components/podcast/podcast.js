import angular from 'angular';
import template from './podcast.tpl.html';
import podcastController from './podcast.controller';


let podcastModule = angular.module('podcast', [])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('home.podcast', {
      url: '/podcast',
      template: template
    });

})

.controller('PodcastController', podcastController);

export default podcastModule;
