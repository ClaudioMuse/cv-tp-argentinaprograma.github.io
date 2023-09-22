
/* Funciones de los iconos */

/* Email */

document.getElementById("Email").addEventListener("mouseover", mouseOver);
document.getElementById("Email").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("Info").innerHTML = "ElliotLee@hotxxxx.com";
  }
  
  function mouseOut() {
    document.getElementById("Info").innerHTML = "Pon el cursor sobre el icono para obtener informacion";
  }

/* Telefono */

document.getElementById("Telefono").addEventListener("mouseover", mouseOver2);
document.getElementById("Telefono").addEventListener("mouseout", mouseOut2);

function mouseOver2() {
    document.getElementById("Info").innerHTML = "011-44**-****";
  }
  
  function mouseOut2() {
    document.getElementById("Info").innerHTML = "Pon el cursor sobre el icono para obtener informacion";
  }

/* Celular */

document.getElementById("Celular").addEventListener("mouseover", mouseOver3);
document.getElementById("Celular").addEventListener("mouseout", mouseOut3);

function mouseOver3() {
    document.getElementById("Info").innerHTML = "011-15****5698";
  }
  
  function mouseOut3() {
    document.getElementById("Info").innerHTML = "Pon el cursor sobre el icono para obtener informacion";
  }

/* Linkedin */

document.getElementById("Linkedin").addEventListener("mouseover", mouseOver4);
document.getElementById("Linkedin").addEventListener("mouseout", mouseOut4);

function mouseOver4() {
    document.getElementById("Info").innerHTML = "www.linkedin.com/in/Lee-Elliot";
  }
  
function mouseOut4() {
    document.getElementById("Info").innerHTML = "Pon el cursor sobre el icono para obtener informacion";
  }

/* Fecha Nacimiento */

document.getElementById("FechaNac").addEventListener("mouseover", mouseOver5);
document.getElementById("FechaNac").addEventListener("mouseout", mouseOut5);

function mouseOver5() {
    document.getElementById("Info").innerHTML = "27-08-1979";
  }
  
function mouseOut5() {
    document.getElementById("Info").innerHTML = "Pon el cursor sobre el icono para obtener informacion";
  }

/* DNI */

document.getElementById("Dni").addEventListener("mouseover", mouseOver6);
document.getElementById("Dni").addEventListener("mouseout", mouseOut6);

function mouseOver6() {
    document.getElementById("Info").innerHTML = "27.***.**2";
  }
  
function mouseOut6() {
    document.getElementById("Info").innerHTML = "Pon el cursor sobre el icono para obtener informacion";
  }

/* Direccion */

document.getElementById("Direccion").addEventListener("mouseover", mouseOver7);
document.getElementById("Direccion").addEventListener("mouseout", mouseOut7);

function mouseOver7() {
    document.getElementById("Info").innerHTML = "Las Fuentes 654 3A";
  }
  
function mouseOut7() {
    document.getElementById("Info").innerHTML = "Pon el cursor sobre el icono para obtener informacion";

  }

/* Funcion de los botones */

function mostrar(){
    document.getElementById("div-a").style.display = "block";
   
}

function mostrar2(){
    document.getElementById("div-b").style.display = "block";
   
}

function ocultar(){
    document.getElementById("div-a").style.display = "none";

}

function ocultar2(){
    document.getElementById("div-b").style.display = "none";
}