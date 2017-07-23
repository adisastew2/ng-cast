angular.module('video-player')
.service('youTube', function($window, $http) {
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {

      params: {
        key: window.YOUTUBE_API_KEY,
        q: 'cats',
        maxResults: 10,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true'
      }
    })

    

    .then(function({data}) {
      callback(data.items);
    });
  };
});