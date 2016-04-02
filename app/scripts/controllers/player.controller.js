'use strict';

angular.module('starter')
.controller('PlayerCtrl', function ($scope,$stateParams) {
	$scope.audioName = $stateParams.audio;
	$scope.audioFileName = $scope.audioName+'.mp3';
	$scope.playlist = $stateParams.playlist;
	$scope.songUrl = 'fixtures/audios/'+$scope.playlist+'/'+$scope.audioFileName;
});
