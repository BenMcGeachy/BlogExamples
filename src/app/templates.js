angular.module('templates', ['app/app.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'<div class="small-10 medium-10 large-10 small-centered columns flexExamples">\n' +
		'	<h1><a href="exampleOne.html">Example One</a></h1>\n' +
		'	<h1><a href="exampleTwo.html">Example Two</a></h1>\n' +
		'</div>');
}]);
