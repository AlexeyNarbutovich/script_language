/**
 * Get type of data
 * @param {*} data 
 * @returns {string} type of data
 */
function getTypeOf(data){
  return typeof(data);
}

/**
 * //function expression
 * @param {*} a fist number 
 * @param {*} b second 
 */
let selectBiggerValue = function(a,b){
    if(checkThatArgumentIsNumber(a,b)){
      return compareNumbers(a,b);
    }
  }
  
alert(selectBiggerValue(55,55));

let a = () => "Anonim function";

let b = (a,b) => a + b;

alert(b(2,5));

/**
 * function declaration with default parameter
 * 
 * @param {*} type With default parameter 'number'
 * @param  {...any} args 
 */
function checkArgumentsType(type = 'number', ...args){
    let result = true;
    for(arg in arguments){
      result = getTypeOf(arg) === type;
    }
    return result
}

// Передача функціі до іншоі функціі

/**
 * Process given numbers by the strategy
 * @param {number} a first number
 * @param {number} b 
 * @param {function} strategy Strategy by process numbers
 * @returns {*} result
 */
function processNumbersByStrategy(a,b, strategy){
  return strategy(a,b);
}


function compareNumbers(a,b){
    let result;
    if(a > b){
        result = "first number bigger then second";
      } else if (a < b){
        result = "second number biger then first";
      } else{
        result = "first and second numbers are equal";
      }
    return result;
}

function compareNumberByPredicate(a,b,predicate){
  return predicate(a,b);
}

alert(compareNumberByPredicate(5, 2, (x,y) => x <=y ? "Bigger or Equal" : "Less"))

function compareStrings(a,b){
    return a === b ? "strings are equal" : "strings are non equal";
}


let compareStr = (a,b) => a ===b ? "strings are equal" : "strings are non equal";

function counter(){
    let a = 0; //initialize a value
    return function (){ //anonim function
        return a++ //increase the value
    }
}

function sum(a){
    return function(b){
        return a + b;
    }
}

function sum2(a){
    return b => a + b;
}

/**
 * Замикання змінноі str
 * 
 * returns {function} returned function is a anonim function
 */
function checkDublicates(){
    let str = "";
    return function(strData){
        if(str.includes(strData)){
            return "This str already exists";
        }
        else{
            str = str + strData;
            return "You've set a unique string"
        }
    }
}

/**
 * Process given numbers by the strategy
 * @param {number} a first number
 * @param {number} b 
 * @param {function} strategy Strategy by process numbers
 * @returns {*} result
 */
function processNumbersByStrategy(a,b, strategy){
  return strategy(a,b);
}

/**
 * Pattern module
 */
var counterModule = (function () {
  var counter = 0;

  var increaseCounter = function () {
      counter++;
  }

  var getCounter = function () {
    return counter;
  }
return {
    getCounter : getCounter,
    increaseCounter : increaseCounter
}
})();