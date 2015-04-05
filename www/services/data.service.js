'use strict';

app.service('dataService', dataService);

dataService.$inject = ['$http'];

function dataService($http) {
	return {
		getOmws: getOmws,
		getOmwDetails: getOmwDetails
	};

	function getOmws() {
		return $http.get('http://sleepy-ridge-8181.herokuapp.com/api/omws');
	}

	function getOmwDetails(omwId) {
		return $http.get('http://sleepy-ridge-8181.herokuapp.com/api/omws' + omwId);
	}
}