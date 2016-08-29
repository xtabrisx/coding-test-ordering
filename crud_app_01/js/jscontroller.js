var app = angular.module("productApp", []);

app.controller("crudController", function($scope){

    $scope.products = [
  {
    "id": "A101",
    "description": "Screwdriver",
    "category": "1",
    "price": "9.75"
  },
  {
    "id": "A102",
    "description": "Electric screwdriver",
    "category": "1",
    "price": "49.50"
  },
  {
    "id": "B101",
    "description": "Basic on-off switch",
    "category": "2",
    "price": "4.99"
  },
  {
    "id": "B102",
    "description": "Press button",
    "category": "2",
    "price": "4.99"
  },
  {
    "id": "B103",
    "description": "Switch with motion detector",
    "category": "2",
    "price": "12.95"
  }
];

//ADD ITEM
$scope.addNew = function(product){
  //alert("test addNew");
  if(isNaN(product.price)){
    alert("ERROR: Price must be a number");
  }else{
    $scope.products.push(product);
    $scope.current = {};
  }
  
};

//EDIT ITEM
$scope.edit = function(product){
  $scope.current = product;

}

//SAVE EDITED ITEM --NOT IN USE--
$scope.save = function(product){
  $scope.current = {};
}

//REMOVE ITEM
$scope.remove = function(product){
  var index = $scope.products.indexOf(product);
  //alert("deleting number " + index);
  $scope.products.splice(index, 1);
}

//CLEAR FIELDS
$scope.clearData = function(product){
  $scope.current = {};
}

//GET TOTAL
$scope.getTotal = function(){
  var total = 0;
  for(var i = 0; i < $scope.products.length; i++){
    var productUnit = $scope.products[i];
    total += Number(productUnit.price);
  }

  return total.toFixed(2);

}


});