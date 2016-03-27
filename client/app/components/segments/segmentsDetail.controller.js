function SegmentsDetailController($stateParams, segmentsResource) {
  "ngInject";

  const vm = this;

  segmentsResource.one($stateParams.id).then((segment) => {
    vm.segment = segment;
  });
}

export default SegmentsDetailController;
