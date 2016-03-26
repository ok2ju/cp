import template from './segments.html';
import controller from './segments.controller';
import './segments.scss';

let segmentsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default segmentsComponent;