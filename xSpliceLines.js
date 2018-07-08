//xSpliceLines.js: Functional Logic.

define([], function() {
  return function( Input ) {
	var LinesBefore = Input.Lines.slice( 0, Input.AfterLine );
	var SplicedLines = LinesBefore.concat( Input.Append );
	return SplicedLines.concat(Input.Lines.slice( Input.AfterLine )); 
	
  };
});
