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

var bg = new Sprite(0,0,600,600);
var boneco = new Sprite(0,0,60,102);
var obstaculo = new Sprite(0,0,60,101);
var start = new Sprite(0,0,418,176);
var gameOver = new Sprite(0,0,358,247);