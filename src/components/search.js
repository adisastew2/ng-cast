angular.module('video-player')

.component('search', {

  bindings: {
    updatevideos: '<'
  },

  templateUrl: 'src/templates/search.html'
});
