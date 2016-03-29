'use strict'
angular.module('starter').service('playListService', function($http, $q) {
	return {
		getPlayListData : function () {
			var plaListUrl = 'fixtures/playList.fixture.json';;
				return $http.get(plaListUrl)
					.then( function (response) 
					{ 
						return response.data;
					} , 
					function (err) {
						return $q.reject(err);
					});
    	}
	};
});