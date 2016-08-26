(function() {
  function foo() {
  console.log('foobar');
}

foo();
}());

//Same as:
!function() {
  function foo() {
  console.log('also foobar');
}

foo();
}();

//Importing external toolkit
// !function(_) {
//   _.someAwesomeMethod = 'yay!!';
//   console.log(_.VERSION);
// }(_);


//Module export pattern
var awesomeNewModule = (function() {
  var exports = {
    foo: 5,
    bar: 10
  };
  exports.helloMars = function() {
    console.log('Hello Mars!');
  };
  exports.goodBye = function() {
    console.log('Goodbye!');
  };
  return exports;
}());

console.log(awesomeNewModule);
awesomeNewModule.helloMars();


//Loose augmentation
var awesomeNewModule = (function(exports) {
  var exports = {
    foo: 5,
    bar: 10
  };
  exports.helloMars = function() {
    console.log('Hello Mars!');
  };
  exports.goodBye = function() {
    console.log('Goodbye!');
  };
  return exports;
}(awesomeNewModule || {}));


//Sub-Module pattern
var awesomeNewModule.sub = (function(exports) {
  var exports = {
    foo: 5,
    bar: 10
  };
  exports.helloMars = function() {
    console.log('Hello Mars!');
  };
  exports.goodBye = function() {
    console.log('Goodbye!');
  };
  return exports;
}(awesomeNewModule.sub || {}));
