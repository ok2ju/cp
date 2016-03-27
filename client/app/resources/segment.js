import angular from 'angular';

let segmentResourceModule = angular.module('segmentResource', [])

  .factory('segmentsResource', (Restangular) => {
    "ngInject";
    
    let service = {
      create: create,
      one: one,
      list: list
    };

    function create(obj) {
      return Restangular.all('segments').post(obj);
    }

    function one(id) {
      return Restangular.one('segments', id).get();
    }

    function list(query) {
      return Restangular.all('segments').getList(query || {});
    }

    return service;
  });

export default segmentResourceModule;
