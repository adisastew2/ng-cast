angular.module('video-player')

.component('videoListEntry', {

  bindings: {
    aVideo: '<',
    updatevid: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'

});
