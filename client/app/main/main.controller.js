'use strict';

angular.module('medicationReminderApp')
	.controller('MainCtrl', function ($scope, $http, $window) {

    var start = moment().format('MM/DD/YYYY'),
        end = moment().add(1, 'day').format('MM/DD/YYYY');

    $http.get('/api/medications?start=' + start + '&end=' + end).then(function (meds) {
        $scope.meds = meds.data;
    });

    $window.setInterval(function () {
        $scope.currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $scope.$apply();
    }, 1000);

    $scope.confirmMedication = false;
    $scope.confirmTime = function(){
    	$scope.confirmMedication = true;
    	// if not confirm -> move to seperate area (apply a css class)
    };
    console.log($scope.diff);
});
