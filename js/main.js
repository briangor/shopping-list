var app = angular.module("ShoppingListApp", []); 
app.controller("shopCtrl", function($scope) {
    $scope.minimize = false;
    $scope.maximize = true;
    $scope.minimizeFx = function () {
        $scope.minimize = true;
        $scope.maximize = false;
    }
    $scope.maximizeFx = function () {
        $scope.minimize = false;
        $scope.maximize = true;
    }
    
    $scope.products = ["Milk", "Bread", "Cheese", "Cake"];
    
    $scope.addItemFx = function () {
        $scope.errortext = "";
        if (!$scope.addItem) {return;}        
        if ($scope.products.indexOf($scope.addItem) == -1) {
            $scope.products.push($scope.addItem);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
        $scope.addItem=" ";
    };
    
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    };
});
