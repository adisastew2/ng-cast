angular.module('video-player')

.component('app', {

  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.updatecurrentvid = function(video) {
      this.currentVideo = video;
      console.log(this);
    };

    this.updatecurrentvid = this.updatecurrentvid.bind(this);

  },

  templateUrl: 'src/templates/app.html'
});

