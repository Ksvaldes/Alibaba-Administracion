/* DESCRIPCIÓN:  
    SE REALIZÓ ESTE ALGORITMO CON LA FINALIDAD DE BUSCAR EN LA BASE DE DATOS EL USUARIO INGRESADO Y TAMBIÉN MENCIONAR SI LO ENCONTRÓ O NO. 
   
   ¿CÓMO FUNCIONA?
    → EN EL SE ANALIZA LOS DATOS DE LA BASE DE DATOS CON LA INFORMACIÓN QUE EL USUSARIO INGRESE.
*/

/* LIBRERÍAS */
export var administracion = document.getElementById("administracion");
export var ParaElLogin = document.getElementById("ParaElLogin");

import {user} from "./user.js";
import { adminstrador } from "./administrador.js";

// VERIFICACION
export function login(username,password){

    for(let i = 0; i<=7;i++){
        if(username === user[i][1] || username === user[i][5]){
            if(password === user[i][2]){
                console.log("BIENVENID@ "+ user [i][3]);
                adminstrador();
            }else{
                console.log('Constraseña incorrecta');
            }
        }else {
            console.log("Usuario incorrecto");
        }
    }

}