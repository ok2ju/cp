webpackJsonp([0],[function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),a=t(r),o=n(3),l=t(o),u=n(4),s=t(u),i=n(9),d=t(i),f=n(15),c=t(f);a["default"].module("app",[l["default"],s["default"].name,d["default"].name]).config(["$locationProvider",function(e){"ngInject";e.html5Mode(!0).hashPrefix("!")}]).component("app",c["default"])},,,,function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=n(1),a=t(r),o=n(5),l=t(o),u=a["default"].module("app.common",[l["default"].name]);exports["default"]=u},function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=n(1),a=t(r),o=n(3),l=t(o),u=n(6),s=t(u),i=a["default"].module("navbar",[l["default"]]).component("navbar",s["default"]);exports["default"]=i},function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=n(7),a=t(r),o=n(8),l=t(o),u={restrict:"E",bindings:{},template:a["default"],controller:l["default"],controllerAs:"vm"};exports["default"]=u},function(e,exports){e.exports='<nav class="navbar">\r\n  <div class="logo">\r\n    <h1>{{ vm.name }}</h1>\r\n  </div>\r\n  <img src="images/user-default.png" alt="">\r\n</nav>\r\n'},function(e,exports){"use strict";function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function r(){n(this,r),this.name="AppName"};exports["default"]=t},function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=n(1),a=t(r),o=n(10),l=t(o),u=a["default"].module("app.components",[l["default"].name]);exports["default"]=u},function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=n(1),a=t(r),o=n(3),l=t(o),u=n(11),s=t(u),i=n(13),d=t(i),f=n(14),c=t(f),p=a["default"].module("segments",[l["default"],s["default"]]).config(["$stateProvider","$urlRouterProvider",function(e,n){"ngInject";n.otherwise("/"),e.state("segments",{url:"/",template:d["default"],controller:"SegmentsController",controllerAs:"vm"})}]).controller("SegmentsController",c["default"]);exports["default"]=p},,,function(e,exports){e.exports='<main>\r\n  <div>\r\n    <button \r\n      class="button"\r\n      accept="audio/*"\r\n      ngf-pattern="\'.mp3, .wav, .ogg\'"\r\n      ngf-select="vm.upload($files)"\r\n      ngf-multiple="true">Select File</button>\r\n    <div \r\n      ngf-drop="vm.upload($files)"\r\n      class="drop-box" \r\n      ngf-drag-over-class="\'dragover\'" \r\n      ngf-multiple="true" \r\n      ngf-allow-dir="false"\r\n      accept="audio/*" \r\n      ngf-pattern="\'.mp3, .wav, .ogg\'">\r\n        <ul class="segments">\r\n          <li ng-repeat="f in vm.files" class="segments__item segment">\r\n            <img src="images/MP3-48.png">\r\n            <p class="segment__name">{{f.name}} {{f.$error}} {{f.$errorParam}}</p>\r\n            <div class="progress" ng-show="f.progress >= 0">\r\n              <div class="bar" style="width: {{f.progress}}%;"></div>\r\n              <div class="label">{{f.progress}}%</div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>\r\n  </div>\r\n</main>\r\n'},function(e,exports){"use strict";function n(e,n,t){var r=this;r.upload=function(a){r.files=a,angular.forEach(a,function(r){r.upload=e.upload({url:"https://angular-file-upload-cors-srv.appspot.com/upload",data:{file:r}}),r.upload.then(function(e){n(function(){r.result=e.data})},function(e){e.status>0&&(t.errorMsg=e.status+": "+e.data)},function(e){r.progress=Math.min(100,parseInt(100*e.loaded/e.total))})})}}Object.defineProperty(exports,"__esModule",{value:!0}),n.$inject=["Upload","$timeout","$scope"],exports["default"]=n},function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=n(16),a=t(r);n(17),n(20);var o={template:a["default"],restrict:"E"};exports["default"]=o},function(e,exports){e.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\r\n<div class="app">\r\n  <navbar></navbar>\r\n  <div ui-view></div>\r\n</div>\r\n'},function(e,exports){},,,function(e,exports){}]);