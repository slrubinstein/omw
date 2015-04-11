angular.module('omw')

.controller('MainCtrl', function($scope) {
	var vm = this;

	vm.login = login;

	function login() {
		var ref = window.open('http://sleepy-ridge-8181.herokuapp.com/signin', '_system', 'location=no');
		ref.addEventListener('loadstart', function(event) {
			alert('LOOK AT ME')
			debugger

		})
	}

});