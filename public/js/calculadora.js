// Obtenemos los valores de los elementos de los botones y le agregamos el evnto addEventListener

document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("c").addEventListener("click", c);
document.getElementById("ce").addEventListener("click", ce);
document.getElementById("raiz").addEventListener("click", opRaiz);
document.getElementById("suma").addEventListener("click", opSum);
document.getElementById("resta").addEventListener("click", opRes);
document.getElementById("multiplicacion").addEventListener("click", opMulti);
document.getElementById("division").addEventListener("click", opDiv);
document.getElementById("porcentaje").addEventListener("click", opPorcen);
document.getElementById("inversa").addEventListener("click", opInversa);
document.getElementById("igual").addEventListener("click", showResul);



//Capturamos la funcion click cuando el usuario da click en el boton e imprime el resultado en pantalla y creamos una funcion por cada boton

function n1(){
	var resul = document.getElementById("resultado").innerHTML;//capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n1").innerHTML; //capturamos el valor del boton1
	document.getElementById("resultado").innerHTML= resul + sumado; //Mostramos ese valor en pantalla
}
function n2(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n2").innerHTML;	 //capturamos el valor del boton2
	document.getElementById("resultado").innerHTML= resul + sumado;	//Mostramos ese valor en pantalla
}

function n3 (){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n3").innerHTML;	 //capturamos el valor del boton3
	document.getElementById("resultado").innerHTML = resul + sumado;	//Mostramos ese valor en pantalla
}

function n4(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n4").innerHTML;	 //capturamos el valor del boton4
	document.getElementById("resultado").innerHTML = resul + sumado;	//Mostramos ese valor en pantalla
}

function n5(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n5").innerHTML;	 //capturamos el valor del boton5
	document.getElementById("resultado").innerHTML = resul + sumado;	//Mostramos ese valor en pantalla
}

function n6(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n6").innerHTML;	 //capturamos el valor del boton6
	document.getElementById("resultado").innerHTML = resul + sumado;	//Mostramos ese valor en pantalla
}

function n7(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n7").innerHTML;	 //capturamos el valor del boton7
	document.getElementById("resultado").innerHTML = resul + sumado;	//Mostramos ese valor en pantalla
}

function n8(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n8").innerHTML;  //capturamos el valor del boton8
	document.getElementById("resultado").innerHTML = resul + sumado;	//Mostramos ese valor en pantalla
}

function n9(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n9").innerHTML;	 //capturamos el valor del boton9
	document.getElementById("resultado").innerHTML = resul + sumado; 	//Mostramos ese valor en pantalla
}

function n0(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("n0").innerHTML;  //capturamos el valor del boton0
	document.getElementById("resultado").innerHTML = resul + sumado;	//Mostramos ese valor en pantalla
}
function c(){
	var limpiar = "";
	document.getElementById("resultado").innerHTML = limpiar; //Limpia la pantalla y su resultado al dar click al boton c
}


function opSum(){
	var resul = document.getElementById("resultado").innerHTML;//capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("suma").innerHTML;	 //capturamos el valor del boton sumar
	document.getElementById("resultado").innerHTML = resul +  sumado ;	//Mostramos ese valor en pantalla
}

function opRes(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("resta").innerHTML;  //capturamos el valor del boton resta
	document.getElementById("resultado").innerHTML = resul +  sumado ;	//Mostramos ese valor en pantalla
}

function opMulti(){
	var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("multiplicacion").innerHTML;  //capturamos el valor del boton multiplicar
	document.getElementById("resultado").innerHTML = resul +  sumado ;	//Mostramos ese valor en pantalla
}
function opDiv(){
	var resul = document.getElementById("resultado").innerHTML;//capturamos el id de la etiqueta resultado
	var sumado = document.getElementById("division").innerHTML;  //capturamos el valor del boton dividir
	document.getElementById("resultado").innerHTML = resul + sumado ;	//Mostramos ese valor en pantalla
}
function opRaiz(){
 var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
 var sumado = document.getElementById("raiz").innerHTML;	 //capturamos el valor del boton raiz
 document.getElementById("resultado").innerHTML = resul + sumado;	//Mostramos ese valor en pantalla


} 
function opPorcen(){
 var resul = document.getElementById("resultado").innerHTML; //capturamos el id de la etiqueta resultado
 var sumado = document.getElementById("porcentaje").innerHTML;	 //capturamos el valor del boton porcentaje
 document.getElementById("resultado").innerHTML = resul + sumado;	//Mostramos ese valor en pantalla

} 


//Creamos una function para mostrar resultado de las operaciones

function showResul(){
	var resul = document.getElementById("resultado").innerHTML; //Obtenemos el id de resultado y lo guardamos en una variable
	var suma = resul.indexOf("+");
	var resta = resul.indexOf("-");
	var multi= resul.indexOf("*");
	var divi = resul.indexOf("/");
	var raiz = resul.indexOf("√");
	var porcen = resul.indexOf("%");

	
	if (suma != -1){
		arr = resul.split("+", 2);
		res =parseInt(arr[0])  + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;

	}
	else if(resta != -1){
		arr = resul.split("-", 2);
		res =parseInt(arr[0])  - parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;

	}
	else if (multi != -1) {
		arr = resul.split("*", 2);
		res =parseInt(arr[0])  * parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	}
	else if (divi != -1) {
		arr = resul.split("/", 2);
		res =parseInt(arr[0])  / parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	}
	else if (raiz != -1){
		arr = resul.split("√", 2);
		res = parseInt(Math.sqrt(arr[0]+ arr[1]));
		document.getElementById("resultado").innerHTML = res;
	}
	else if (porcen != -1){

		arr = resul.split("%", 2);
		var porcen = arr[0]/100;
		var resul2 = porcen * arr[1];
		document.getElementById("resultado").innerHTML = resul2;
	}
	

}
//creamos funcion para quitar el ultimo nuero agregado
function ce(){
	  var res = document.getElementById("resultado").innerHTML;
	 cifras = res.length; //obtenemos el tamalo de numeros en pantalla
	 br = res.substr(cifras-1, cifras); //Obtenemos el ultimo numero en pantalla
	 res = res.substr(0, cifras-1); //Quitar el ultimo numero
	 document.getElementById("resultado").innerHTML = res; //Mostrar en pantalla
}
//creamos funcion de inversa
function opInversa(){
	res = document.getElementById("resultado").innerHTML;
	inver = parseInt(res);
	inver = 1/inver
	document.getElementById("resultado").innerHTML = inver;
}






