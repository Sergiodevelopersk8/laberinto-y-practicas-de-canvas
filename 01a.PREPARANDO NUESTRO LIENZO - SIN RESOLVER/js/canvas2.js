var canvas=document.querySelector("#lienzo");
var ctx=canvas.getContext('2d');
var alfa=1;

/**cielo */
var grd=ctx.createLinearGradient(0,0,0,500);
grd.addColorStop(0,"rgba(0,0,255,"+alfa+")");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(0,0,1000,500);


/**oceano */
var grd2=ctx.createLinearGradient(0,400,0,500);
grd2.addColorStop(0,"rgba(0,180,255,"+alfa+")");
grd2.addColorStop(1,"white");
ctx.fillStyle=grd2;
ctx.fillRect(0,400,1000,100);


/////////
////////
////////

/**montaña 1 */

ctx.beginPath();
ctx.fillStyle='rgba(100,0,255,'+alfa+')';
ctx.moveTo(0,400);
ctx.lineTo(200,100);
ctx.lineTo(400,400);
ctx.fill();


/**montaña 2 */

ctx.beginPath();
ctx.fillStyle='rgba(50,0,255,'+alfa+')';
ctx.moveTo(200,400);
ctx.lineTo(400,100);
ctx.lineTo(600,400);
ctx.fill();



/**montaña 3 */

ctx.beginPath();
ctx.fillStyle='rgba(100,0,255,'+alfa+')';
ctx.moveTo(400,400);
ctx.lineTo(600,100);
ctx.lineTo(800,400);
ctx.fill();


/**montaña 4 */
ctx.beginPath();
ctx.fillStyle='rgba(50,0,255,'+alfa+')';
ctx.moveTo(600,400);
ctx.lineTo(800,100);
ctx.lineTo(1000,400);
ctx.fill();


/**nieve */

/**nieve de la montaña 1 */

ctx.beginPath();
ctx.fillStyle='rgba(255,255,255,'+alfa+')';
ctx.moveTo(133,200);
ctx.lineTo(200,100);
ctx.lineTo(200,300);
ctx.fill();


ctx.beginPath();
ctx.fillStyle='rgba(255,255,255,'+alfa+')';
/**ctx.moveTo(ejex1,ejey1); */
ctx.moveTo(200,300);
/**ctx.lineTo(200=sube,100); */
ctx.lineTo(200,100);
/**ctx.lineTo(267=baja,200); */
ctx.lineTo(267,200);
ctx.fill();

/**nieve montaña 2 */

ctx.beginPath();
ctx.fillStyle='rgba(255,255,255,'+alfa+')';
ctx.moveTo(333,200);
ctx.lineTo(400,100);
ctx.lineTo(400,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(255,255,255,'+alfa+')';
ctx.moveTo(467,200);
ctx.lineTo(400,100);
ctx.lineTo(400,300);
ctx.fill();



/**nieve montaña 3 */

ctx.beginPath();
ctx.fillStyle='rgba(255,255,255,'+alfa+')';
ctx.moveTo(533,200);
ctx.lineTo(600,100);
ctx.lineTo(600,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(255,255,255,'+alfa+')';
ctx.moveTo(666,200);
ctx.lineTo(600,100);
ctx.lineTo(600,300);
ctx.fill();


/**nieve montaña 4 */

ctx.beginPath();
ctx.fillStyle='rgba(255,255,255,'+alfa+')';
ctx.moveTo(733,200);
ctx.lineTo(800,100);
ctx.lineTo(800,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(255,255,255,'+alfa+')';
ctx.moveTo(867,200);
ctx.lineTo(800,100);
ctx.lineTo(800,300);
ctx.fill();

//////////////////////////////////////////////
/////////////////////////////////////////////
///////////////////////////////////////////

/**monte 1 */
ctx.beginPath();
ctx.fillStyle='rgba(10,0,150,'+alfa+')';
ctx.moveTo(0,400);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(10,0,100,'+alfa+')';
ctx.moveTo(200,450);
ctx.lineTo(200,300);
ctx.lineTo(400,400);
ctx.fill();


/**fin del konte 1 */

/**monte 2*/
ctx.beginPath();
ctx.fillStyle='rgba(10,0,150,'+alfa+')';
ctx.moveTo(600,400);
ctx.lineTo(800,300);
ctx.lineTo(800,450);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(10,0,100,'+alfa+')';
ctx.moveTo(1000,399);
ctx.lineTo(800,300);
ctx.lineTo(800,450);
ctx.fill();


/**fin del konte 2 */

////////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



///----------------------------------------////
///----------------------------------------////
///-----------------------------------------////


/**arbol  */

ctx.fillStyle='rgba(100,0,20,'+alfa+')';
ctx.fillRect(100,200,20,150);

ctx.beginPath();

ctx.fillStyle='rgba(0,140,25,'+alfa+')';
ctx.arc(140,180,40,0,2*Math.PI);
ctx.fill();

ctx.beginPath();

ctx.fillStyle='rgba(0,110,25,'+alfa+')';
ctx.arc(80,190,30,0,2*Math.PI);
ctx.fill();


ctx.beginPath();

ctx.fillStyle='rgba(0,80,25,'+alfa+')';
ctx.arc(110,200,50,0,2*Math.PI);
ctx.fill();


ctx.beginPath();

ctx.fillStyle='rgba(0,50,25,'+alfa+')';
ctx.arc(120,230,30,0,2*Math.PI);
ctx.fill();

///----------------------------------------////
///----------------------------------------////
///-----------------------------------------////


/**arbol 2 */

ctx.fillStyle='rgba(100,0,20,'+alfa+')';
ctx.fillRect(900,200,20,150);

ctx.beginPath();
ctx.fillStyle='rgba(0,50,25,'+alfa+')';
ctx.moveTo(850,300);
ctx.lineTo(910,200);
ctx.lineTo(970,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(0,80,25,'+alfa+')';
ctx.moveTo(850,250);
ctx.lineTo(910,150);
ctx.lineTo(970,250);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(0,110,25,'+alfa+')';
ctx.moveTo(850,200);
ctx.lineTo(910,100);
ctx.lineTo(970,200);
ctx.fill();



//---------------------------//
//---------------------------//
//--------------------------//

/**tierra izquierda */

/**circulo de la izquierda */

/**INICIO DEL CIRCULO */

/**ctx.beginPath(); comenzar camino  eso se sicnifica canvas lee en cascada */
ctx.beginPath();
/**ctx.arc(x1 posicion inicio,y1 vertical,r radio,starAngle inicio del angulo,endAngle final del angulo); */

ctx.fillStyle='rgba(0,180,10,'+alfa+')';
ctx.arc(0,500,250,3.15,2*Math.PI);
ctx.fill();
/**fin del circulo de la izquierda */

//lineas curvas

ctx.beginPath();
ctx.fillStyle='rgba(0,100,10,'+alfa+')';
ctx.moveTo(0,500);
ctx.bezierCurveTo(0,470,50,470,50,500);
ctx.bezierCurveTo(50,470,100,470,100,500);
ctx.bezierCurveTo(100,470,150,470,150,500);
ctx.bezierCurveTo(150,470,200,470,200,500);
ctx.bezierCurveTo(200,470,250,470,250,500);
ctx.fill();

//fin de las lineas

/**INICIO DEL CIRCULO  derecha*/

ctx.beginPath();
ctx.fillStyle='rgba(0,120,10,'+alfa+')';
ctx.arc(900,600,250,3.15,2*Math.PI);
ctx.fill();


/**fin del circulo de la derecha */


/**mi estilo */
//ctx.beginPath();
/**ctx.arc(x1 posicion inicio,y1 vertical,r radio,starAngle inicio del angulo,endAngle final del angulo); */

/*ctx.arc(20,500,25,3.15,2*Math.PI);
ctx.arc(76,500,25,0,2*Math.PI);
ctx.arc(132,500,25,0,2*Math.PI);
ctx.arc(189,500,25,0,2*Math.PI);
ctx.arc(242,500,23,0,2*Math.PI);*/



/*ctx.fillStyle="brown";
ctx.fill();*/

/**contorno circulo */

/*ctx.lineWidth=5;
ctx.strokeStyle="brown";
ctx.stroke();
/**fin de los circulitos de la izquierda */

/** */








