//xSpliceLines_abc_123_1_Returns_a123bc.js: Testing logic.

define([
	"xSpliceLines"
], function(
	xSpliceLines
) {
	return {
		"Name":"xSpliceLines_abc_123_1_Returns_a123bc",
		"Input": {
			"Lines": [ 'a', 'b', 'c' ],
			"Append": [ '1', '2', '3' ],
			"AfterLine": 1
		},
		"Function": xSpliceLines,
		"ExpectedOutput": [
			'a', '1', '2', '3', 'b', 'c'
		],
		"Comparator": {
			"Object": true,
			"Debug": true
		}
	};
});
