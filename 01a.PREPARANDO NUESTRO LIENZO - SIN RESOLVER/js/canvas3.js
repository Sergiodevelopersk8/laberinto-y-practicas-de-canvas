var canvas=document.querySelector('#lienzo');
var ctx=canvas.getContext('2d');


var imagenJPG=new Image();
imagenJPG.src="img/ejemploJPG.jpg";
imagenJPG.onload= function(){
   
    /*ctx.drawImage(variable, x1, y1, x2,  y2)*/
    ctx.drawImage(imagenJPG, 100, 100,imagenJPG.naturalWidth/2,imagenJPG.naturalHeight/2);
}


var imagenPNG=new Image();
imagenPNG.src="img/ejemploPNG.png";
imagenPNG.onload= function(){
   
    /*ctx.drawImage(variable, x1, y1, x2,  y2)*/
    ctx.drawImage(imagenPNG, 400, 100,imagenPNG.naturalWidth/2,imagenPNG.naturalHeight/2);
}



var imagenSVG=new Image();
imagenSVG.src="img/ejemploSVG.svg";
imagenSVG.onload= function(){
   
    /*ctx.drawImage(variable, x1, y1, x2,  y2)*/
    ctx.drawImage(imagenSVG, 700, 100,imagenSVG.naturalWidth/2,imagenSVG.naturalHeight/2);
}
