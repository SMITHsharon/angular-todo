app.controller("ItemViewCtrl", function($routeParams, $scope, ItemFactory, ToolFactory) {

  $scope.selectedItem = {};
  $scope.tools = [];

  console.log("routeParams", $routeParams);

  ItemFactory.getSingleItem($routeParams.id).then((results) => {
  	console.log("results.data", results.data);
  	$scope.selectedItem = results.data;
  })
  .catch((error) => {
  	console.log("getSingleItem", error);
  });


  ToolFactory.getToolList($routeParams.id)
  .then((results) => {
 // console.log("results :: ", results);
  	$scope.tools = results;
  })
  .catch((error) => {
  	console.log("error in getToolList", error);
  });


});
