import angular from 'angular';
import Segments from './segments/segments';

let componentModule = angular.module('app.components', [
  Segments.name
]);

export default componentModule;
