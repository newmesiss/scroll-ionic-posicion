angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

})

.controller('CategoriasCtrl', function ($scope, $state) {
    $scope.goToLocales = function () {
        $state.go('app.locales');
    };

})
    .controller('CategoriaLocales', function ($scope, $state) {


        $scope.showItem = function () {
            $state.go('app.local');


        }



    })

.controller('CategoriaLocal', function ($state, $scope, $http, $ionicScrollDelegate) {


        $scope.$on('$ionicView.afterEnter', function () {

            $scope.getposicion = function () {


                $scope.posicion = $ionicScrollDelegate.getScrollPosition().top;
            }

        });






})


.controller('HomeCtrl', function ($scope,$state ) {

    $scope.cat = function(){

    $state.go('app.categorias');

    }


    });
