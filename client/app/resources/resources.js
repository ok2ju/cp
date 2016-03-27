import angular from 'angular';
import SegmentResource from './segment';

let resourceModule = angular.module('app.resources', [
  SegmentResource.name
]);

export default resourceModule;
