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
    
    //Variables
    $scope.setQuantity;


    //JSON file to store items
    //$scope.products = ["Milk", "Bread", "Cheese", "Cake"];
    $scope.products = [{
        "title": "Milk",
        "quantity": 2
    },{
        "title": "bread",
        "quantity": 3
    }];
    

    $scope.addItemFx = function () {
        $scope.errortext = "";
        if (!$scope.addItem) {return;}        
        if ($scope.products.indexOf($scope.addItem) == -1) {
            //$scope.products.push($scope.addItem, $scope.setQuantity);
            $scope.products.push({
                title: $scope.addItem,
                quantity: $scope.setQuantity 
            });

            console.log("$scope.addItem: " + $scope.addItem );
           
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
        $scope.addItem=" ";
        $scope.setQuantity=0;
    };

    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    };
});
