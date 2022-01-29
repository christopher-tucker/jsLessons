
/*
STRING
Any characters inside quotation marks. Some characters are special, such as "\", but we'll worry about that later. A string can contain any sequence of characters, visible or invisible, and characters may be repeated.
*/
var myString = "here is a string of whatever...duu87%8%0-+ 99hdl";

/*
INTEGER
-2, -1, 0, 1, 2, 3, etc.
*/
var myInteger = 837;

/*
BOOLEAN
a value of either true or false
*/
var myBoolTrue = true;
var myBoolFalse = false;


/*
OBJECT
a data structure with key/value pairs
uses curly braces like so:
*/
var myObject = {
    "thisIsAKeyThatPointsAtAStringValue": "here's the string betch",
    "thisIsAKeyThatPointsAtAnIntegerValue": 69,
    "thisIsAKeyThatPointsAtAnotherObject": {
        "firstKeyOfOtherObject": "firstValue",
        "secondKeyOfOtherObject": "secondValue"
    },
    "thisIsAKeyThatPointsAtAnArray": [ 0, 1, 2, 3 ]
}

// you don't need to put quotes around the keys, but they are still strings.
var myCleanerObject = {
    1: "valOne",
    merp: "merp val"
}

/*
ARRAY
A sequence of values (either represented as literals or as variables)
*/
var myArray = [ 12, "ajsdkfj", myBoolTrue, [ "inner array", myInteger ], { "innerObjectKey": "innerObjectValue" } ];