function PodcastController(segments) {
  "ngInject";

  const vm = this;

  vm.segments = segments;
  vm.tracks = [];
  vm.dropCallback = dropCallback;


  function dropCallback(event, index, item, external, type, allowedType) {
      console.log('event:');
      console.log(event);
      console.log('index:');
      console.log(index);
      console.log('external:');
      console.log(external);
      console.log('type:');
      console.log(type);
      console.log('item');
      console.log(item);
      var index = _.findIndex(vm.segments, (o) => {
        return o.id === item.id;
      });

      if(index >= 0) {
        vm.segments.splice(index, 1);
      } 
      
      return item;
  };
}

export default PodcastController;
