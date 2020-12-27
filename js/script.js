let calculate;
let check;
let checkFunction

window.onload = function(){
	calculate = document.getElementById("btnCalc");
	check = document.getElementById("btnCheck");
	calculate.addEventListener("click", processResult)
	checkFunction = checkDublicates();
	check.addEventListener("click", () => checkFunction());
}

function processResult(){
    const firstArgument = document.getElementById("firstArgument").value;
    const secondArgument = document.getElementById("secondArgument").value;
    const operationEl = document.getElementById("selectOperation");
    const operation = operationEl.options[operationEl.selectedIndex].text

    const result = document.getElementById("resultText");

    result.textContent = Calculate(Number(firstArgument), Number(secondArgument), accessToMap.getItemByKey(operation));

    var t = function(){
        if (result.textContent){
            alert("there is no result");
        }
    }
}

//Function declaration
/**
 * Process two numbers according to the given operation
 * @param {int} arg1
 * @param {int} arg2
 * @param {function} operation
 */
function Calculate(arg1, arg2, operation){
    return operation(arg1,arg2);
}

/**
 * function shows closuring of array
 */
function checkDublicates(){
    let array = [5,7,1];
    return function(){
      let result = "";
      let strData = document.getElementById("dataToCheck").value;
      if(array.some(el => el === strData)){
        result =  "This is data already exist";
      } else {
              array.push(strData);
              result = "New data has been added";
    }
    alert(result);
    let checkResultElement = document.getElementById("checkResult")
    checkResultElement.textContent = array.join(",");
    }
}

let accessToMap = (function(){
    let map = new Map()
    map.set("+", (a,b)=>a + b);
    map.set("-", (a,b)=>a - b);
    map.set("*", (a,b)=>a * b);
    map.set("/", (a,b)=>a / b);

    let getItemBykey = function(data){
        return map.get(data);
    }

    return {
        getItemByKey : getItemBykey
    }
})();




