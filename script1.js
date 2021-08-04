var a = 20;
var b = 30;
var func1
=
new Function('a', 'b', 'alert("Ni hao " + a + b);');
function func2(a, b){
    console.log("Ni hao " + a + b);
}
//func1(a,b);
//func2(a,b);
//console.log(document.title);
window.addEventListener('blur', ()=>{
    document.title = '再见';
    document.getElementById('1').innerHTML = '成功啦！'
}, true);

window.addEventListener('focus', ()=>{
    document.title = '你好';
}, true);
//document.write('404 Not Found');