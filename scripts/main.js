var i = 0;
var text = 'CAMMIE'
var speed = 50;

function typing(){
    if (i > text.length){
        document.getElementById('firstName').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

