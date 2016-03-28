function SegmentsController(Upload, $timeout, $scope, segments) {
  "ngInject";

  const vm = this;

  vm.files = segments;

  vm.upload = function (files) {
    /*vm.files = files;*/

    angular.forEach(files, (file) => {
      vm.files.unshift(file);
      file.upload = Upload.upload({
        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
        data: { 
          file: file,
          user: 'test'
        }
      });

      file.upload.then((response) => {
        /*$timeout(function() {
          file.result = response.data;
        });*/
        file.result = response.data;
      }, function(response) {
        if (response.status > 0) {
          $scope.errorMsg = response.status + ': ' + response.data;
        }
      }, function(evt) {
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    });
  };
}

export default SegmentsController;
