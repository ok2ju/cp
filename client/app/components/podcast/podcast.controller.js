function PodcastController(segments) {
  "ngInject";

  const vm = this;

  vm.segments = segments;
  vm.tracks = [];
  vm.dropCallback = dropCallback;
  vm.dragEndCallback = dragEndCallback;


  function dropCallback(event, index, item, external, type, allowedType) {
    let indexItem = _.findIndex(vm.segments, (o) => {
      return o.id === item.id;
    });

    if(indexItem >= 0) {
      vm.segments.splice(indexItem, 1);
    } 

    return item;
  }

  function dragEndCallback(event, dropEffect) {
    console.log('event');
    console.log(event);
    console.log('dropEffect');
    console.log(dropEffect);
    console.log(vm.tracks);
  }
}

export default PodcastController;
