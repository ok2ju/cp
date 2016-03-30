function SegmentsDetailController($stateParams, segments, segmentsResource, Restangular, toastr) {
  "ngInject";

  const vm = this;
  vm.updateSegment = updateSegment;
  vm.loadTags = loadTags;

  vm.segment = _.find(segments, (o) => {
    return o.id === $stateParams.id;
  });

  function updateSegment(id) {
    segmentsResource.update(id, vm.segment).then(() => {
      toastr.success('Segment updated!', 'Yay!');
    }, (err) => {
      toastr.error('While updating segment!', 'Error');
    });
  }

  function loadTags(query) {
    return Restangular.all('tags').getList(query || {});
  }
}

export default SegmentsDetailController;
