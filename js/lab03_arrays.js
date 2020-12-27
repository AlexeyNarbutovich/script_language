let array = [];

function initArray(){
    array = [1,2,3,4,5,6,7,8,9,0];
    printArray();
}

function addItemInTheEnd(){
    const item = document.getElementById("newItem").value;
    array.push(item);
    printArray();
}

function removeLastItem(){
    array.pop();
    printArray();
}

function addInTheBegin(){
    const item = document.getElementById("newItem").value;
    array.unshift(item);
    printArray();
}

function removeFirstArray(){
    array.shift();
    printArray();
}

function sumOfElements(){
    let sum = 0;
    array.forEach(x => sum += x);
    document.getElementById("printSum").value = sum;
}

function filterArray(){
    let predicate = document.getElementById("predicate").value;
    alert(predicate);
    document.getElementById("filteredArray").value = array.filter(eval(predicate)).toString();
}

function convertToArrayOfFactorials(){
    document.getElementById("mapArray").value = array.map(el => factorial(el)).toString();
}

function printArray(){
    document.getElementById("textControl#1").textContent = array.toString();
}

function factorial(element){
    if(element > 1){
        return element * factorial(element - 1)
    } else {
        return element;
    }
}

function sampleOfEvery(){
    array.every(element => element > 0); // true since all element is greater zero
}

function sampleOfSome(){
    array.some(element => element > 8); //true since we have 9 which is greater then 8
}

function getResultByReduce(){
    array.reduce((res,item) => res - item, 0); // result = -45, initial value is 0
}

function invokeReduce2(){
	array.reduce(function(sum, item, index, arr){
    console.log(`previous elelement is: ${sum}. Current item is ${item} with index ${index}. Lenght is ${arr.length}`);
    return sum * item;
},1);
}

function getResultByReduceRight(){
    array.reduceRight((sum,item) => sum - item,100); // result = -55, initial value is 100
}
