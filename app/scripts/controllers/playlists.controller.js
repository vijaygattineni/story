'use strict';

angular.module('starter')
.controller('PlaylistsCtrl', function ($scope,$state,$q,playListService) {

	var getPlayLists = function(){
 		playListService.getPlayListData()
 		.then(function sucessCallback(response){
			$scope.playlists = response;
 		}, function errorCallback(error){
 			return $q.reject(error);
 		}); 		
	};
	
	getPlayLists();

	$scope.goToPlaylist = function(paramAudioTitle){
 		$state.go('app.single',{audioTitle:paramAudioTitle});
	};

});
