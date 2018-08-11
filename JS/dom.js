var person = {
    Name: 'Jume Brice',
    Age: 19,
    height: 1.73,
};
console.log(person);
console.log(person.Name);
person.Name = 'Master';
console.log(person.Name);
console.log(document);
console.log(window);
console.log(window.document);
console.log(document.window);
console.log(alert.document);
console.log(Math.document);
var text = 'I love JavaScript';
document.getElementById('demo').innerHTML = text;
document.getElementsByClassName('hello').innerHTML = text;