define("amber-testapp/TestApp", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('TestApp');
$core.packages["TestApp"].innerEval = function (expr) { return eval(expr); };
$core.packages["TestApp"].transport = {"type":"amd","amdNamespace":"amber-testapp"};

$core.addClass('TestApp', $globals.Object, ['charDictionary'], 'TestApp');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$2="#jquery-append"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($2)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryAppend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=2;
//>>excludeEnd("ctx");
$3="#echo-word"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=3;
//>>excludeEnd("ctx");
$recv($3)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doEchoWord();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["doEchoWord"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv("#input-word"._asJQuery())._keypress_((function(ev){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv($recv(ev)._which()).__eq((13));
if($core.assert($4)){
return self._doEchoWord();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.TestApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].\x0a\x09'#echo-word' asJQuery click: [ self doEchoWord ].\x0a\x09'#input-word' asJQuery keypress: [:ev | \x0a\x09\x09\x09(ev which = 13) ifTrue: [\x0a\x09\x09\x09\x09self doEchoWord\x0a\x09\x09\x09].\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "doJQueryAppend", "doEchoWord", "keypress:", "ifTrue:", "=", "which"]
}),
$globals.TestApp);

$core.addMethod(
$core.method({
selector: "doEchoWord",
protocol: 'action',
fn: function (){
var self=this;
var text;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1="#input-word"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
text=$recv($1)._val();
text=$recv(text)._collect_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(c).__eq_eq(" ");
if($core.assert($2)){
return c;
} else {
return $recv(self["@charDictionary"])._at_ifAbsent_(c,$recv(c).__comma("&#x0308;"));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv("#output"._asJQuery())._html_(text);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doEchoWord",{text:text},$globals.TestApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doEchoWord\x0a\x09|text|\x0a\x09text := '#input-word' asJQuery val.\x0a\x09text := text collect: [:c | \x0a\x09\x09(c == ' ') \x0a\x09\x09\x09ifFalse: [charDictionary at: c ifAbsent: (c, '&#x0308;') ]\x0a\x09\x09\x09ifTrue: [c]].\x0a\x09'#output' asJQuery html: text",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val", "asJQuery", "collect:", "ifFalse:ifTrue:", "==", "at:ifAbsent:", ",", "html:"]
}),
$globals.TestApp);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'starting',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self["@charDictionary"]=$recv($Dictionary())._new();
$1=self["@charDictionary"];
$recv($1)._at_put_("a","ä");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("b","&#98;&#x0308;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("c","c̈");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($1)._at_put_("e","ë");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($1)._at_put_("h","ḧ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($1)._at_put_("i","ï");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv($1)._at_put_("m","m̈");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($1)._at_put_("n","n̈");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv($1)._at_put_("o","ö");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=9;
//>>excludeEnd("ctx");
$recv($1)._at_put_("p","p̈");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=10;
//>>excludeEnd("ctx");
$recv($1)._at_put_("s","s̈");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=11;
//>>excludeEnd("ctx");
$recv($1)._at_put_("t","ẗ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=12;
//>>excludeEnd("ctx");
$recv($1)._at_put_("u","ü");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=13;
//>>excludeEnd("ctx");
$recv($1)._at_put_("v","v̈");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=14;
//>>excludeEnd("ctx");
$recv($1)._at_put_("w","ẅ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=15;
//>>excludeEnd("ctx");
$recv($1)._at_put_("x","ẍ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=16;
//>>excludeEnd("ctx");
$recv($1)._at_put_("y","ÿ");
$2=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TestApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22initialize dictionary\x22\x0a\x09charDictionary := Dictionary new.\x0a\x09charDictionary at: 'a' put: 'ä';\x0a\x09\x09at: 'b' put: '&#98;&#x0308;';\x0a\x09\x09at: 'c' put: 'c̈';\x0a\x09\x09at: 'e' put: 'ë';\x0a\x09\x09at: 'h' put: 'ḧ';\x0a\x09\x09at: 'i' put: 'ï';\x0a\x09\x09at: 'm' put: 'm̈';\x0a\x09\x09at: 'n' put: 'n̈';\x0a\x09\x09at: 'o' put: 'ö';\x0a\x09\x09at: 'p' put: 'p̈';\x0a\x09\x09at: 's' put: 's̈';\x0a\x09\x09at: 't' put: 'ẗ';\x0a\x09\x09at: 'u' put: 'ü';\x0a\x09\x09at: 'v' put: 'v̈';\x0a\x09\x09at: 'w' put: 'ẅ';\x0a\x09\x09at: 'x' put: 'ẍ';\x0a\x09\x09at: 'y' put: 'ÿ';\x0a\x09\x09yourself.\x0a\x09^self",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "yourself"]
}),
$globals.TestApp);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._new())._initialize())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.TestApp.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new initialize augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "initialize", "new"]
}),
$globals.TestApp.klass);

});
