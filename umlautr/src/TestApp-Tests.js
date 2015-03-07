define("amber-testapp/TestApp-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('TestApp-Tests');
$core.packages["TestApp-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["TestApp-Tests"].transport = {"type":"amd","amdNamespace":"amber-testapp"};

$core.addClass('TestAppTest', $globals.TestCase, [], 'TestApp-Tests');

});
