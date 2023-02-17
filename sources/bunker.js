var password1 = "340462053364"
var password2 = "Read The Fucking Manual"

function passcheck1(){
    
    if(document.getElementById('pass1').value != password1){
        alert('Mauvais mot de passe');
        return false;
    }
    
    if(document.getElementById('pass1').value == password1){
        alert('Correct, passez au mot de passe suivant');
    }
}

function passcheck2(){
    
    if(document.getElementById('pass2').value != password2){
        alert('Mauvais mot de passe');
        return false;
    }
    
    if(document.getElementById('pass2').value == password2){
        alert('Correct');
    }
}