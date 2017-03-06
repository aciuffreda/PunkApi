angular.
module('core.beer').
factory('Beer', ['$resource',
  function($resource) {

    return $resource('https://api.punkapi.com/v2/beers', {}, {
      query: {
        method: 'GET',
        //params: {page: 1, per_page: 80},
        isArray: true
      },
      //todo:delete this
      getBeerDetails: {
        method: 'GET',
        isArray: true
      },
    });
  }
]);