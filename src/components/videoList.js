angular.module('video-player')

.component('videoList', {

  bindings: {
    videos: '<',
    updatevid: '<'
  },

  templateUrl: 'src/templates/videoList.html'
  // template: `
  //   <div ng-include="'src/templates/videoList.html'"></div>
    
  // `
});
