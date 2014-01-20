angular.module('templates', ['app/app.view.html']);

angular.module('app/app.view.html', []).run(['$templateCache', function($templateCache) {
	'use strict';
	$templateCache.put('app/app.view.html',
		'<div class="small-10 medium-10 large-10 small-centered columns">\n' +
		'	<h1>Media Queries</h1>\n' +
		'\n' +
		'	<!-- Top rectangle to be coloured red if the screen is large -->\n' +
		'	<div class="row">\n' +
		'		<div class="small-4 medium-6 large-8 columns large-box"></div>\n' +
		'		<h4 class="small-8 medium-6 large-4 columns">This box will be red if your viewport is larger than 1280px</h4>\n' +
		'	</div>\n' +
		'	<!-- End Rectangle -->\n' +
		'\n' +
		'	<!-- Middle rectangle to be coloured yellow if the screen is medium -->\n' +
		'	<div class="row">\n' +
		'		<div class="small-4 medium-6 large-8 columns medium-box"></div>\n' +
		'		<h4 class="small-8 medium-6 large-4 columns">This box will be yellow if your viewport is between 768px and 1280px</h4>\n' +
		'	</div>\n' +
		'	<!-- End Rectangle -->\n' +
		'\n' +
		'	<!-- Bottom rectangle to be coloured green if the screen is small -->\n' +
		'	<div class="row">\n' +
		'		<div class="small-4 medium-6 large-8 columns small-box"></div>\n' +
		'		<h4 class="small-8 medium-6 large-4 columns">This box will be green if your viewport is smaller than 768px</h4>\n' +
		'	</div>\n' +
		'	<!-- End Rectangle -->\n' +
		'\n' +
		'\n' +
		'	<!-- JavaScript to return current view port height and width -->\n' +
		'	<!-- Code for returning values can be found in BlogExamples/src/index.html -->\n' +
		'	<div class="small-12 small-centered columns">\n' +
		'		<div class="small-12 medium-6 large-6 columns width-row">\n' +
		'			<h3>Current Browser Width:</h3>&nbsp;<h3 id="jsWidth"></h3><h3>px</h3>\n' +
		'		</div>\n' +
		'		<div class="small-12 medium-6 large-6 columns width-row">\n' +
		'			<h3>Current Browser Height:</h3>&nbsp;<h3 id="jsHeight"></h3><h3>px</h3>\n' +
		'		</div>\n' +
		'	</div>\n' +
		'	<!-- End JavaScript -->\n' +
		'\n' +
		'</div>');
}]);
