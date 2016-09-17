function Sprite(x,y,largura,altura){
   this.x = x;
   this.y = y;
   this.largura = largura;
   this.altura = altura;

   this.desenha = function(xCanvas,yCanvas,img){
        
		objeto = new Image();
		objeto.src = img;
        ctx.drawImage(objeto,this.x,this.y,this.largura,this.altura,xCanvas,yCanvas,this.largura,this.altura);
   }
}

var bg = new Sprite(0,0,1600,600),
 boneco = new Sprite(0,0,60,102),
 obstaculo = new Sprite(0,0,60,101),
 start = new Sprite(0,0,418,176),
 gameOver = new Sprite(0,0,358,247),
 ninja = new Sprite(0,0,102,102),
 mago = new Sprite(0,0,68,102),
 caminho = new Sprite(0,0,1000,50);
/*var batman = new Sprite(0,0,102,116);*/