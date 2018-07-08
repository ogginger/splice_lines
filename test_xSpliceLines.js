//test_xSpliceLines.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "xSpliceLines",
  "tests/xSpliceLines_abc_123_1_Returns_a123bc"
], function(
  TestSuite,
  log,
  xSpliceLines,
  xSpliceLines_abc_123_1_Returns_a123bc
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xSpliceLines initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xSpliceLines" );
          xTestSuite.add( xSpliceLines_abc_123_1_Returns_a123bc );  
      xTestSuite.test();
    }
  });
});
