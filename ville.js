var teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

let ville = document.getElementById('farmVille');
let papel = ville.getContext("2d");

let fondo = {
	url:"tile.png",
	cargaOK: false
}

let vaca = {
	url: "vaca.png",
	cargaOK: false
};

let cerdo = {
	url: "cerdo.png",
	cargaOK: false
};

let pollito = {
	url: "pollo.png",
	cargaOK: false
};

var cantidad = aleatorio(0, 5);

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

cerdo.objeto = new Image();
cerdo.objeto.src = "cerdo.png";
cerdo.objeto.addEventListener("load", cargarCerdo);

pollito.objeto = new Image();
pollito.objeto.src = "pollo.png";
pollito.objeto.addEventListener("load", cargarPollito);


function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVaca()
{
	vaca.cargaOK = true;
	dibujar();
}
function cargarCerdo()
{
	cerdo.cargaOK = true;
	dibujar();
}
function cargarPollito()
{
	pollito.cargaOK = true;
	dibujar();
}

function dibujar()
{
	if (fondo.cargaOK)
	{
		papel.drawImage(fondo.objeto, 0, 0);
	} 

	if (vaca.cargaOK)

	{
		
		console.log(cantidad + " vacas");
		for (var v=0; v < cantidad; v++)
		{
		let x = aleatorio(0, 7);
		let y = aleatorio(0, 7);
		x = x * 60;
		y = y * 60;
		papel.drawImage(vaca.objeto, x, y);
		}
		
	}

	if (cerdo.cargaOK)

	{
		console.log(cantidad + " cerdos");
		for (var v = 0; v < cantidad; v++)
		{
			let x = aleatorio(0, 7);
			let y = aleatorio(0, 7);
			x = x * 60;
			y = y * 60;
			papel.drawImage(cerdo.objeto, x, y);
		}
		
	}

	if (pollito.cargaOK)

	{
		console.log(cantidad + " pollitos");
		let x = 150;
		let y = 150;
		papel.drawImage(pollito.objeto, x, y);
		document.addEventListener("keydown", movimiento);
		let distancia = 5;

		function movimiento(evento)

			{

				switch (evento.keyCode)
				{
					case teclas.DOWN:
						papel.drawImage(fondo.objeto, 0, 0);
						y = y + distancia;
						if (y >= 480) 
						{
							y = -40;
						}
						papel.drawImage(pollito.objeto, x, y);
						console.log(y);
					break;

					case teclas.UP:
						papel.drawImage(fondo.objeto, 0, 0);
						y = y - distancia;
						if (y <= -50) 
						{
							y = 480;
						}
						papel.drawImage(pollito.objeto, x, y);
						console.log(y);
					break;

					case teclas.RIGHT:
						papel.drawImage(fondo.objeto, 0, 0);
						x = x + distancia;
						if (x >= 480) 
						{
							x = -40;
						}
						papel.drawImage(pollito.objeto, x, y);
						console.log(x);
					break;

					case teclas.LEFT:
						papel.drawImage(fondo.objeto, 0, 0);
						x = x - distancia;
						if (x <= -50) 
						{
							x = 480;
						}
						papel.drawImage(pollito.objeto, x, y);
						console.log(x);
					break;

					default:
						console.log("Solo te puedes mover con las teclas");
				}

			}
	}
}

function aleatorio(min, max)
{
	var resultado;
	resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}

// Movimiento



console.log("Este es Super pollo, super pollo decidió destrir a sus compañeros de granja y desatarse de sus cadenas que lo mantuvo estático en un solo lugar por milenios." + 
	"Mira al super pollo, no se mueve porque no le da la gana. Super pollo se teletransporta."
+ "Super pollo no entra a los edificios ni rodea los arboles porque super pollo está por encima de todo."
+ "Admira a super pollo, CONTEMPLA A SUPER POLLO");



