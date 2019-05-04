var name = prompt('Введите ваше имя',)
var long = name.length;
var x = 1;
for(var i = 0; i<long; i++){
    if (isNaN(name[i])){
        continue;
    }
    if (isFinite(name[i])) {
        x = 2;
        break;
    }
}
switch(x) {
    case 1:
    function reverse (str) {
        return str.split('').reverse().join('');
    }
        alert(reverse(name));
        break;
    case 2:
        (document.write(name.toUpperCase()));
        break;
}