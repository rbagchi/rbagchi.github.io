Smalltalk createPackage: 'TestApp'!
Object subclass: #TestApp
	instanceVariableNames: 'charDictionary'
	package: 'TestApp'!

!TestApp methodsFor: 'action'!

doEchoWord
	|text|
	text := '#input-word' asJQuery val.
	text := text collect: [:c | 
		(c == ' ') 
			ifFalse: [charDictionary at: c ifAbsent: (c, '&#x0308;') ]
			ifTrue: [c]].
	'#output' asJQuery html: text
! !

!TestApp methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	'#echo-word' asJQuery click: [ self doEchoWord ].
	'#input-word' asJQuery keyup: [:ev | 
				self doEchoWord
	]
!

initialize
	"initialize dictionary"
	charDictionary := Dictionary new.
	charDictionary at: 'a' put: 'ä';
		at: 'b' put: '&#98;&#x0308;';
		at: 'c' put: 'c̈';
		at: 'e' put: 'ë';
		at: 'h' put: 'ḧ';
		at: 'i' put: 'ï';
		at: 'm' put: 'm̈';
		at: 'n' put: 'n̈';
		at: 'o' put: 'ö';
		at: 'p' put: 'p̈';
		at: 's' put: 's̈';
		at: 't' put: 'ẗ';
		at: 'u' put: 'ü';
		at: 'v' put: 'v̈';
		at: 'w' put: 'ẅ';
		at: 'x' put: 'ẍ';
		at: 'y' put: 'ÿ';
		yourself.
	^self
! !

!TestApp class methodsFor: 'starting'!

start
	self new initialize augmentPage
! !

