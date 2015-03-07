function personController($scope, $http) {
	$scope.order = "name";
	$http.jsonp('http://localhost/training/data-jasonp.json?&callback=JSON_CALLBACK')
//		$http.get('http://localhost/training/data.json')
		.success(function(data){
			console.log('JSON data read successfuly.');
			console.log(data);
			$scope.users = data;
		})
		.error(function(data){
			console.log('Error reading JSON data.');
		});
}
