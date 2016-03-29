
angular.module('starter')
.controller('PlaylistCtrl', function ($scope,$stateParams,playListService) {
	console.log($stateParams.audioTitle);
	$scope.audioTitle = $stateParams.audioTitle;

    // Should be replaced with a backend service call, iterating over playlist is hectic 

	var getPlayLists = function(){
 		playListService.getPlayListData()
 		.then(function sucessCallback(response){
			$scope.playlists = response;
 			for(var i in $scope.playlists){
				if($scope.playlists[i].title === $scope.audioTitle){
					$scope.playlist = $scope.playlists[i].audioFiles;
				}
			}
 		}, function errorCallback(error){
 			return $q.reject(error);
 		}) 		
	};
	
	getPlayLists();

	console.log('-->');
})
