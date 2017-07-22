angular.module('video-player')

.component('videoList', {

  bindings: {
    videos: '<'
  },

  templateUrl: 'src/templates/videoList.html'
  // template: `
  //   <div ng-include="'src/templates/videoList.html'"></div>
    
  // `
});
