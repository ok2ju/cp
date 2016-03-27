function SegmentsDetailController($stateParams, segments) {
  "ngInject";

  const vm = this;

  vm.segment = _.find(segments, (o) => {
    return o.id === $stateParams.id;
  });
}

export default SegmentsDetailController;
