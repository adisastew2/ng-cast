angular.module('video-player')

.component('videoListEntry', {

  bindings: {
    aVideo: '<'
  },

  // controller: function() {
  //   console.log(aVideo);
  // },

  templateUrl: 'src/templates/videoListEntry.html'

});
