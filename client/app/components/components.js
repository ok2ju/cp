import angular from 'angular';
import Home from './segments/segments';

let componentModule = angular.module('app.components', [
  Home.name
]);

export default componentModule;
