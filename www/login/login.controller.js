angular.module('omw')

.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state', '$timeout', 'userService'];

function LoginCtrl($scope, $state, $timeout, userService) {
	var vm = this;

	vm.go = go;
	vm.login = login;
	vm.cookie = '';

	function login() {
  	var view = window.open('file:///Users/steve/Apps/omw/experiment.html', '_blank', 'location=yes');
  	view.addEventListener('loadstop', replaceHeaderImage);
  	view.addEventListener('exit', iabClose);

    function replaceHeaderImage() {
    	var loop = setInterval(function() {

        view.executeScript({
          code: "localStorage.getItem('cookie');"
        }, function( values ) {
          var returnedCookie = values[ 0 ];

          if ( returnedCookie ) {
            clearInterval( loop );
            view.close();
            localStorage.setItem('cookie', returnedCookie)
            getCookie();
          }
    		
    		});
    	});
		}

	function getCookie() {
		vm.cookie = localStorage.getItem('cookie')
		alert(vm.cookie)
		$scope.$apply();
	}
    function iabClose(event) {
      view.removeEventListener('loadstop', replaceHeaderImage);
      view.removeEventListener('exit', iabClose);
    }
	}

	function go() {
		$state.go('tab.home')
	}
}