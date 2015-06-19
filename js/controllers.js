angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

})



.controller('CategoriaLocal', function ($state, $scope, $http, $ionicScrollDelegate) {

    $scope.contenidoScroll = function () {
        console.log($ionicScrollDelegate.$getByHandle('contentScroll').getScrollPosition().top);

    }

    $scope.getPosicion = function () {

        $scope.posicion = $ionicScrollDelegate.$getByHandle('contentScroll').getScrollPosition().top;
    }



})
.controller('HomeCtrl', function ($scope, $state) {

    $scope.Local = function () {

        $state.go('app.local');

    }


});
