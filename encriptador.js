 var textarea = buscarElemento("#textarea");
 var resultado = buscarElemento(".resultado");
 var figuras = buscarElemento(".figuras")
 var botonEncriptar = buscarElemento("#encriptar");
 var encriptado;
 var botonDesencriptar = buscarElemento("#desencriptar");
 var desencriptado;


 botonEncriptar.addEventListener("click", function(event){
         event.preventDefault();
         //aqui se encripta el texto ingresado y se guarda en una variable "encriptado"
         var encriptado = textoEncriptado(textarea.value)
         var prueba = textarea.value;    
         //aqui se crea el span que va a aparecer en la pantalla guardado en una variable pero sin ningun valor
         var encriptadoSpan = document.createElement("span");
         //aqui le decimos al span que creamos que el textContent(el valor) va a ser lo que ingresen en la variable encriptado
         encriptadoSpan.textContent = encriptado;
         //aqui agarramos el span resultado que creamos a partir del boton y le asignamos el valor de la variable encriptado 
         setTimeout(function(){
            resultado.textContent = encriptado;
            resultado.style.display = "block";
            figuras.style.display = "none";
         }, 500);
         textarea.value = "";
         
      
})

botonDesencriptar.addEventListener("click", function(evento){
        botonDesencriptar.enable = true
        evento.preventDefault();
        var desencriptado = textoDesencriptado(textarea.value);
        var desencriptadoSpan = document.createComment("span")
        desencriptadoSpan.textContent = desencriptado;
        setTimeout(function(){
            resultado.textContent = desencriptado;
            resultado.style.display = "block";
            figuras.style.display = "none";
        }, 500);
        textarea.value = ""; 
        //borrarDibujos("fadeIn","img-muñeco","ningun-msj");
})

function buscarElemento(selector){
    return document.querySelector(selector)
} 

let search = 'eiaou'.split('');
let replace = ["enter","imes","ai","ober","ufat"];
let normal = ["e","i","a","o","u"];


function textoEncriptado(msg) {
    msg = msg.normalize('NFKD');
    // Convertir en minúsculas
    msg = msg.toLowerCase();
    // Recorrer todos los caracteres
    search.forEach((char, index) => {
        // Remplazar cada caracter en la cadena
        msg = msg.replaceAll(char, replace[index]);
    });
    return msg;
}
 
function textoDesencriptado(msj){
    // Eliminar tildes
    msj = msj.normalize('NFKD');
    // Convertir en minúsculas
    msj = msj.toLowerCase();
    // Recorrer todos los caracteres
    replace.forEach((char, index) => {
        // Remplazar cada caracter en la cadena
        msj = msj.replaceAll(char, normal[index]);
    });
    return msj;
}

function borrarDibujos(dibujoUno,dibujoDos){
    dibujoUno.src = resultado.textContent;
    dibujoDos.src = resultado.textContent;
}
    /*
    dibujo.classList.add(desaparicion);
    ningunMensaje.classList.add(desaparicion); 
    setTimeout(function(){
         dibujo.classList.replace(resultado.textContent);
         
    },500);
   */