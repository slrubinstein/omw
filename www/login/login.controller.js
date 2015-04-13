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
  	view.addEventListener('loadstop', retrieveCookie);
  	view.addEventListener('exit', windowClose);

    function retrieveCookie() {
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
    function windowClose(event) {
      view.removeEventListener('loadstop', retrieveCookie);
      view.removeEventListener('exit', windowClose);
    }
	}

	function go() {
		$state.go('tab.home')
	}
}