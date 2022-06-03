var botonCopiar = document.querySelector("#copiar");
var textoAcopiar = document.querySelector(".resultado");
var copiado = document.querySelector("#textarea");
var figuras = document.querySelector(".figuras");


botonCopiar.addEventListener("click",function(event){
		setTimeout(function(){		
		copiado.value = textoAcopiar.textContent;
		textoAcopiar.innerHTML = "";
		agregarDibujos();
		
	},500);
	});

function agregarDibujos(){
		resultado.style.display = "none";
    	figuras.style.display = "block";
}
/*
		textoAcopiar.classList.remove(desaparicion);
		divResultado.classList.add(aparicion);
		ningunMensaje.classList.add(aparicion)
*/
/*textoAcopiar.classList.add(desaparicion);

	setTimeout(function(){		
		copiado.value = textoAcopiar.textContent;
		textoAcopiar.innerHTML = "";
		
	},500);
	*/