function NavbarController($rootScope) {
  "ngInject";

  const vm = this;

  vm.name = 'AppName';

  $rootScope.$watch('pageName', (v) => {
    vm.pageName = v;
  });
}

export default NavbarController;
