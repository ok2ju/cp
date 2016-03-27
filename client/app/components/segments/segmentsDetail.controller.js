function SegmentsDetailController($stateParams, segments, segmentsResource) {
  "ngInject";

  const vm = this;
  vm.updateSegment = updateSegment;

  vm.segment = _.find(segments, (o) => {
    return o.id === $stateParams.id;
  });

  function updateSegment(id) {
    segmentsResource.update(id, vm.segment).then(() => {
      console.log('Segment updated!');
    });
  }
}

export default SegmentsDetailController;
