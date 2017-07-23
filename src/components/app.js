angular.module('video-player')

.component('app', {

  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.updatecurrentvid = function(video) {
      this.currentVideo = video;
    };

    this.updatecurrentvid = this.updatecurrentvid.bind(this);

    this.updatevideos = function(data) {
      this.videos = data;
      this.currentVideo = data[0];
    };

    this.updatevideos = this.updatevideos.bind(this);

    youTube.search('cats', this.updatevideos);

  },

  templateUrl: 'src/templates/app.html'
});

