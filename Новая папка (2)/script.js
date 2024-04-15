
var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function shfr() {
    
    var msg = document.getElementById("msg").value;
    var shift = parseInt(document.getElementById("shift").value);

   
    var shfrsoob = caesarCipher(msg, shift);
    alert("Зашифрованное сообщение: " + shfrsoob);
}


function caesarCipher(msg, shift) {
    var result = ""; 

   
    for (var i = 0; i < msg.length; i++) {
        var char = msg[i]; 
        var index = alph.indexOf(char.toUpperCase()); 

       
        if (index === -1) {
            result += char;
            continue; 
        }

       
        var newIndex = (index + shift + alph.length) % alph.length;

       
        result += alph[newIndex];
    }
    return result; 
}

