var y, x, z, n;
y = 'an Engineer';
x = 'Google';
z = 'Ange';
n = 5;
document.getElementById('demo').innerHTML = "You will be" + ' ' + y + ' ' + 'in' + ' ' + x + ", and married to " + z + " with" + n + ' kids';
var Name = prompt("What is your name:");
var Job = prompt("What is your current job:");
var wife = prompt("Who are you married to:");
var num_ch = prompt("How many children do you have:");
document.getElementById('ex1').innerHTML = "You will be" + ' ' + Name + ' ' + 'in' + ' ' + Job + ", and married to " + wife + " with" + num_ch + ' kids';
var yOb = prompt("Enter your birth year");
var YourFuture = prompt("Enter a possible future");
var possibleYear = YourFuture - yOb;
document.getElementById('ex2').innerHTML = "I will be either " + (possibleYear-1) + ' or ' + possibleYear + ' in ' + YourFuture; 
function DogAge(age){
    var ans = 1;
    ans =age * 7;
    return(ans);
}
var dogage = prompt("Enter your dog's age:");
document.getElementById('ex3').innerHTML = DogAge(dogage);
function EvenOdd(a){
    var iter;
    for(iter = 1;iter <= a;iter++){
        if((iter % 2)==0)
            console.log(iter + ' is even');
        else
            console.log(iter + ' is odd');
    }
}
var number = prompt("Enter a number to tell the odds from the even: ");
EvenOdd(number);