
/* LIBRERIAS */
import {login} from "./login.js"

function recuperar_datos(e) {
    e.preventDefault(); 

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    //LOGIN
    login(username,password);
}

// BOTON
var bt_entrar = document.querySelector("#login");
bt_entrar.addEventListener('submit',recuperar_datos); 
