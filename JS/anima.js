function myFun(){
     document.getElementById('pos1').style.visibility='visible';
     document.getElementById('pos2').style.visibility='visible';
     document.getElementById('pos3').style.visibility='visible';
     document.getElementById('close').innerHTML = '&times;';
     document.addEventListener("dblclick", myfun);
}
function myfun(){
    document.getElementById('pos1').style.visibility='hidden';
    document.getElementById('pos2').style.visibility='hidden';
    document.getElementById('pos3').style.visibility='hidden';
    document.getElementById('close').innerHTML = '&plus;';
}
function Close(){
    document.getElementById('closed').style.visibility = 'hidden';
    document.getElementById('item0').style.visibility = 'hidden';
    document.getElementById('item1').style.visibility = 'hidden';
    document.getElementById('item2').style.visibility = 'hidden';
    document.getElementById('item3').style.visibility = 'hidden';
    document.getElementById('item4').style.visibility = 'hidden';
    document.getElementById('item5').style.visibility = 'hidden';
    document.getElementById('item6').style.visibility = 'hidden';
    document.getElementById('item7').style.visibility = 'hidden';
    document.getElementById('item8').style.visibility = 'hidden';
    document.getElementById('item9').style.visibility = 'hidden';
    document.getElementById('item10').style.visibility = 'hidden';
    document.getElementById('item11').style.visibility = 'hidden';
    document.getElementById('item12').style.visibility = 'hidden';
    document.getElementById('item13').style.visibility = 'hidden';
    document.getElementById('item14').style.visibility = 'hidden';
    document.getElementById('item15').style.visibility = 'hidden';
    document.getElementById('item16').style.visibility = 'hidden';
    document.getElementById('item17').style.visibility = 'hidden';
    document.getElementById('item18').style.visibility = 'hidden';
    document.getElementById('item19').style.visibility = 'hidden';
    document.getElementById('item20').style.visibility = 'hidden';
}
function Open(){
    document.getElementById('closed').style.visibility = 'visible'; 
}
var add = [],time = new Date();
function Add(){
    var id,iter,text;
    add.push(document.getElementById('get').value);
    iter = add.length.valueOf();
    iter--;
    id = 'item' + iter.toString();
    document.getElementById(id).style.visibility = 'visible';
    document.getElementById(id).innerHTML += add[iter.valueOf()] + '__________'+ time.getHours()+':'+time.getMinutes()+'<br />';
}
function del(a){
    var id,iter,text;
    console.log(a);
    add.splice(a,1);
    id = 'item' + a.toString();
    document.getElementById(id).style.display = 'none';

} 