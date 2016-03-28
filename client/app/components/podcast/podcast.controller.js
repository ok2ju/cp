function PodcastController(segments) {
  "ngInject";

  const vm = this;

  vm.segments = segments;
  vm.tracks = [];
}

export default PodcastController;
