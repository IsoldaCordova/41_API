var listaUno = document.getElementById("boton");
listaUno.addEventListener("click", añadirLista);
var contenedor = document.getElementById("lista");
var contadorId = 1;
	


// da click al primer boton y sale un input para agregar texto y un boton
function añadirLista(){
	// crear listas

	var listaName = document.createElement("input");
		listaName.setAttribute("placeholder","añadir titulo");
	var boton = document.createElement("button");
		boton.setAttribute("type","button");
		boton.textContent = ("Guardar");
	contenedor.appendChild(listaName);
	contenedor.appendChild(boton);
 	// Dar click en boton guardar y se borra el boton
 	boton.addEventListener("click",crearTitulo);

 	boton.onclick = function(){
 		boton.parentElement.removeChild(listaName);
 		boton.parentElement.removeChild(boton);
 		}
 // da click en boton2 y abre cuadro con titulo, un textarea para agregar listas y el boton para guardarlos
 	function crearTitulo(){
 		// crea titulo y arroja boton con textarea para crear los titulos de las tareas
 		var cuadritoUno = document.createElement("div");
			cuadritoUno.setAttribute("class", "jumbotron");


 		var tituloName = document.getElementById("tema");
 		var titulo =  document.createElement("h2");
 			titulo.innerHTML = listaName.value;
 		var texto = document.createElement("textarea");
			texto.innerHTML = listaName.value;
			texto.value = ("placeholder","añadir lista");
 		var botonDos = document.createElement("button");
 			botonDos.setAttribute("type","button");
 			botonDos.style.display="block";
			botonDos.textContent = ("Guardar lista");

		tituloName.appendChild(cuadritoUno);
		cuadritoUno.appendChild(titulo);
		cuadritoUno.appendChild(texto);
		cuadritoUno.appendChild(botonDos);

		botonDos.addEventListener("click",listas);// dar click y se hace la funcion Listas


		function listas(){
			//crea los titulos de tareas
			var cajaP = document.createElement("div");
				cajaP.setAttribute("class", "panel-body");
				cuadritoUno.appendChild(cajaP);

			var p = document.createElement("p");
				p.innerHTML = texto.value;
				cajaP.appendChild(p);
				p.draggable = "true";
				p.setAttribute("id","idTarjetitas"+ contadorId);

				cajaP.addEventListener("drop",soltar);// darle atributo de soltar a mi caja principal que abraza las listas
		cajaP.addEventListener("dragover", arrastrarSobre);// atributo arrastrar sobre
		cajaP.addEventListener("dragleave", dejarArrastrar);// atributo dejar-arrastrar
		

				p.addEventListener("dragstart", arrastrar);// inicio para arrastrar mi tarjeta
				p.addEventListener("dragend", terminarArrastrar);// terminar de arrastrar mi tarjeta
				contadorId++;	
			}
 	}
 	function soltar(evt){
 		var idTransfer = evt.dataTransfer.getData("text");	
 		var pMove = document.getElementById(idTransfer);
 		this.insertBefore(pMove, this.childNodes[1]);
 	}
 	function arrastrarSobre(evt){
 		evt.preventDefault();// dice que haga las funciones establecidas y no actue por accion default
 	}
 	function arrastrar(evt){
 		evt.dataTransfer.setData("text",this.id);// funcion de p
 	}
 	function dejarArrastrar(evt){
 		
 	}
 	function terminarArrastrar(evt){

 	}

 }