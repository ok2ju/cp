function SegmentsController(Upload, $timeout, $scope) {
  const vm = this;

  $scope.$watch('files', function () {
        vm.upload(vm.files);
    });
    $scope.$watch('file', function () {
        if (vm.file != null) {
            vm.files = [vm.file]; 
        }
    });
    vm.log = '';

    vm.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {
                      username: vm.username,
                      file: file  
                    }
                }).then(function (resp) {
                    $timeout(function() {
                        vm.log = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.log;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                        evt.loaded / evt.total);
                    vm.log = 'progress: ' + progressPercentage + 
                      '% ' + evt.config.data.file.name + '\n' + 
                      vm.log;
                });
              }
            }
        }
    };
}

SegmentsController.$inject = ['Upload', '$timeout', '$scope'];

export default SegmentsController;
