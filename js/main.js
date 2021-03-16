var app = angular.module("shopListApp", []);
app.controller("shopCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItemFx = function() {
        $scope.errortext = '';
        if (!$scope.addItem) { return; }
        if ($scope.products.indexOf($scope.addItem) == -1) {
            $scope.products.push($scope.addItem);
            $scope.addItem = '';
        } else {
            $scope.errortext = "The item is already in the list.";
        }

    }
    $scope.removeItem = function(x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});