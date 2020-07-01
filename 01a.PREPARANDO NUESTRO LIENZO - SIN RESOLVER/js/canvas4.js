var frame=window.requestAnimationFrame || window.moztRequestAnimationFrame || window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame;


var canvas=document.querySelector('#lienzo');
var ctx=canvas.getContext('2d');

var numero=0;
var ubicacionx=0;
var animacion;

//Dibujar Sprite

var sprite=new Image();
sprite.src="img/opcion1.png";

//sprite.onload= function(){
   //a los sprite se  le agrega mas propiedades en drawimage
    /*ctx.drawImage(variable, ubicacion x, ubicacion y, recorte x, recorte y, x1, y1, x2,  y2)*/
 //   ctx.drawImage(sprite, 200,0,100, 100,0,100,100,100);
//}

function tiempo (){

if(numero >=600){ numero=0;}else{numero+=20;}
for(var i=0; i<=numero; i+=100){
    if(numero >=i){ubicacionx=i;}
}

ctx.clearRect (0,0, canvas.clientWidth,canvas.height);

ctx.drawImage(sprite, ubicacionx,0,100, 100,0,100,100,100);

    animacion=frame(tiempo);

}

tiempo();

setTimeout(function(){

    cancelAnimationFrame(animacion);

},3000)
