import angular from 'angular';

let segmentResourceModule = angular.module('segmentResource', [])

  .factory('segmentsResource', (Restangular) => {
    "ngInject";
    
    let service = {
      create: create,
      one: one,
      list: list,
      update: update
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

    function update(id, data) {
      return Restangular.one('segments', id).customPUT(data);
    }

    return service;
  });

export default segmentResourceModule;
