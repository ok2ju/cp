function SegmentsController(Upload, $timeout, $scope) {
  const vm = this;

  vm.upload = function (files) {
    vm.files = files;

    angular.forEach(files, (file) => {
      file.upload = Upload.upload({
        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
        data: { file: file }
      });

      file.upload.then((response) => {
        $timeout(function() {
            file.result = response.data;
        });
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

SegmentsController.$inject = ['Upload', '$timeout', '$scope'];

export default SegmentsController;
