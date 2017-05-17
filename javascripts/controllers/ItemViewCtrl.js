app.controller("ItemViewCtrl", function($routeParams, $scope, ItemFactory) {
  $scope.selectedItem = {};

  console.log("routeParams", $routeParams);

  ItemFactory.getSingleItem($routeParams.id).then((results) => {
  	console.log("results.data", results.data);
  	$scope.selectedItem = results.data;
  })
  .catch((error) => {
  	console.log("getSingleItem", error);
  });


});
