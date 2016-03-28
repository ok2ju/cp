import angular from 'angular';
import Segments from './segments/segments';
import Podcast from './podcast/podcast';

let componentModule = angular.module('app.components', [
  Segments.name,
  Podcast.name
]);

export default componentModule;
