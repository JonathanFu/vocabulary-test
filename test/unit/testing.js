describe('Controller: AppCtrl', function(){

	beforeEach(module('myApp'));

	var AppCtrl,
	scope;

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		MainCtrl = $controller('AppCtrl', {
			$scope: scope
		})

	}));


	it('should work', function(){
		// expect(scope.testing).toEqual('hello');

	});


});