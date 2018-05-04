var firstNum = "";
var secondNum = 0;
var operation = '';
var storeFirstNum = 0;
function Nine() {
    firstNum += '9';
    document.getElementById('inpt').innerHTML = firstNum;
}
function Eight() {
    firstNum += '8';
    document.getElementById('inpt').innerHTML = firstNum;
}
function Seven() {
    firstNum += '7';
    document.getElementById('inpt').innerHTML = firstNum;
}
function Six() {
    firstNum += '6';
    document.getElementById('inpt').innerHTML = firstNum;
}
function Five() {
    firstNum += '5';
    document.getElementById('inpt').innerHTML = firstNum;
}
function Four() {
    firstNum += '4';
    document.getElementById('inpt').innerHTML = firstNum;
}
function Three() {
    firstNum += '3';
    document.getElementById('inpt').innerHTML = firstNum;
}
function Two() {
    firstNum += '2';
    document.getElementById('inpt').innerHTML = firstNum;
}
function One() {
    firstNum += '1';
    document.getElementById('inpt').innerHTML = firstNum;
}
function Zero() {
    firstNum += '0';
    document.getElementById('inpt').innerHTML = firstNum;
}
function Plus() {
    storeFirstNum = parseFloat(firstNum);
    firstNum = '';
    operation = '+'; 
    document.getElementById('inpt').innerHTML = 'Plus';
}
function Mult() {
    storeFirstNum = parseFloat(firstNum);
    firstNum = '';
    operation = '*';
    document.getElementById('inpt').innerHTML = 'Times';
}
function Minus() {
    storeFirstNum = parseFloat(firstNum);
    firstNum = '';
    operation = '-';
    document.getElementById('inpt').innerHTML = 'Minus';
}
function Div() {
    storeFirstNum = parseFloat(firstNum);
    firstNum = '';
    operation = '/';
    document.getElementById('inpt').innerHTML = 'Divided by'
}
function Point() {
    var val = firstNum.search('.');
        firstNum += '.';
        document.getElementById('inpt').innerHTML = firstNum;
}
function Equals() {
    secondNum = parseFloat(firstNum);
    if (operation === '+'){
        var ans = Number(storeFirstNum) + Number(secondNum);
        document.getElementById('inpt').innerHTML = ans;
        firstNum = '';
    }
    else if(operation === '-') {
        var ans = Number(storeFirstNum) - Number(secondNum);
        document.getElementById('inpt').innerHTML = ans;
        firstNum = '';
    }
    else if(operation === '*') {
        var ans = Number(storeFirstNum) * Number(secondNum);
        document.getElementById('inpt').innerHTML = ans;
        firstNum = '';
    }
    else if(operation === '/') {
        var ans = Number(storeFirstNum) / Number(secondNum);
        document.getElementById('inpt').innerHTML = ans;
        firstNum = '';
    }
}