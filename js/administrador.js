import {administracion, ParaElLogin} from './login.js';

export function adminstrador(){
    alert('Datos ingresados con exito');
    administracion.classList.add("activar-block");
    ParaElLogin.classList.remove("activar-flex");
}