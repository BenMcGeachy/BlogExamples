'use strict';

angular.module('app', ['templates', 'common'])
	.controller('AppCtrl', ['$scope', function ($scope) {
			$scope.message = 'Hello World';
			$scope.templateUrl = 'app/app.view.html';
		}
	]);;'use strict';

angular.module('common', ['dependencies']);;'use strict';

angular.module('dependencies', []);;;angular.module('templates', ['app/app.view.html', 'app/page-two/page-two.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'<div class="small-10 medium-10 large-10 small-centered columns flexExamples">\n' +
		'	<h1><a href="exampleOne.html">Example One</a></h1>\n' +
		'	<h1><a href="exampleTwo.html">Example Two</a></h1>\n' +
		'</div>');
}]);

angular.module('app/page-two/page-two.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/page-two/page-two.view.html',
		'<h1>This Is Page TWO</h1>');
}]);
