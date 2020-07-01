var canvas=document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

/*** getContext retorna un contexto de dibujo en el lienzo o null si el identificador del contexto no esta soportado*/

/**INICIO DEL CUADRADO */

/** primero relleno*/

ctx.fillStyle="cyan";
/**ctx.fillRect(x1 izquierda o derecha ,y2 arrba o abajo,500 ancho,100 altura);
 */
ctx.fillRect(10,10,500,100);

/**contorno */

ctx.lineWidth=5;
/** contorno
ctx.strokeStyle="rgba(255 rojo,0 verde,255 azul,1 transparencia)"; */
ctx.strokeStyle="rgba(255,0,255,1)";


ctx.rect(10,10,500,100);

ctx.stroke();

/**FINAL DEL CUADRADO */


/**INICIO DEL CIRCULO */

/**ctx.beginPath(); comenzar camino  eso se sicnifica canvas lee en cascada */
ctx.beginPath();
/**ctx.arc(x1 posicion inicio,y1 vertical,r radio,starAngle inicio del angulo,endAngle final del angulo); */

ctx.arc(300,300,80,0,2*Math.PI);

/**relleno circulo */

ctx.fillStyle="green";
ctx.fill();

/**contorno circulo */

ctx.lineWidth=5;
ctx.strokeStyle="purple";
ctx.stroke();


/**FIN DEL CUADRADO */


/**inicio de lineas */
ctx.beginPath();
/**ctx.moveTo(0,0); inicio del camino */

ctx.moveTo(0,0);
/** ctx.lineTo(200 x,200 y); fin del camino*/
ctx.lineTo(200,200);
ctx.lineTo(400,200);
ctx.lineTo(600,400);
ctx.lineTo(800,200);
ctx.lineTo(1000,200);

ctx.lineTo(1000,0);

/**contorno */
ctx.lineWidth=5;
ctx.stroke();


//relleno linea

ctx.fillStyle="rgba(0,0,255,.6)";
ctx.fill();

/**fin de lineas */

/**curvas */
ctx.beginPath();

ctx.moveTo(0,500);
/**ctx.bezierCurveTo(cpx1 palanca,cpxy1 palanca,cpx2,cpxy2,x2 cordenada,y2cordenada) */
ctx.bezierCurveTo(200,300,400,400,500,500);

//relleno curva
ctx.lineWidth=5;
ctx.strokeStyle="rgba(100,0,0,1)";
ctx.stroke();

//relleno curva
ctx.fillStyle='rgba(255,0,0,1)';
ctx.fill();


//degradado
/**ctx.createLinearGradient(x1,y1,x2,y2); se coloca en una variable */
var grad=ctx.createLinearGradient(0,300,100,400);
grad.addColorStop(0,"red");
grad.addColorStop(1,"yellow");
ctx.fillStyle=grad;
ctx.fillRect(0,300,100,100);

/**ctx.createRadialGradient(x1,y1,r1,x2,y2,r2); se coloca en una variable */
var grad2=ctx.createRadialGradient(890,350,5,900,350,120);
grad2.addColorStop(0,"white");
grad2.addColorStop(1,"black");
ctx.beginPath();
ctx.arc(900,400,100,0,7)
ctx.fillStyle=grad2;
ctx.fill();

/** fin curvas */























