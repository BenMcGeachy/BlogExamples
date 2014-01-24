angular.module('templates', ['app/app.view.html', 'app/page-two/page-two.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'<div class="small-10 medium-10 large-10 small-centered columns flexExamples">\n' +
		'  <h1>Flexible Box Layout</h1>\n' +
		'\n' +
		'	<div class="row">\n' +
		'		<div class="small-12 columns">\n' +
		'			<div class="red"></div>\n' +
		'			<div class="yellow"></div>\n' +
		'			<div class="green"></div>\n' +
		'		</div>\n' +
		'	</div>\n' +
		'	<div class="row">\n' +
		'		<h4>This is how 3 blocks, with a defined width would look before any flex properties are defined.</h4>\n' +
		'	</div>\n' +
		'\n' +
		'	<hr>\n' +
		'\n' +
		'	<div class="row">\n' +
		'		<div class="small-12 columns flex-container">\n' +
		'			<div class="red"></div>\n' +
		'			<div class="yellow"></div>\n' +
		'			<div class="green"></div>\n' +
		'		</div>\n' +
		'	</div>\n' +
		'	<div class="row">\n' +
		'		<h4>However, when "justify-content" is applied with the parameter "space-between", all blocks appear on the same line with even spacing between each item. In addition to this, their width\'s dynamically change depending on the screen size.</h4>\n' +
		'	</div>\n' +
		'\n' +
		'</div>');
}]);

angular.module('app/page-two/page-two.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/page-two/page-two.view.html',
		'<h1>This Is Page TWO</h1>');
}]);
