var c = document.querySelector('canvas');

c.width = window.innerWidth;
c.height = window.innerHeight;

var ctx = c.getContext("2d");

//rectangle//
/*
ctx.fillStyle = 'green'; 
ctx.fillRect(10, 10, 150, 100); 

//line //
ctx.beginPath();
ctx.moveTo(50,300);
ctx.lineTo(300,100);
ctx.lineTo(500,200);
ctx.lineTo(50,300);
ctx.strokeStyle = 'rgb(255,123,113)';
ctx.stroke();*/

//arc or cirlce//




/*for(var i=0; i<40; i++){
    var x= Math.random() * window.innerWidth;
    var y= Math.random() * window.innerHeight;


    ctx.beginPath();
    ctx.arc(x,y,50,0,Math.PI *2, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    
}
var x= Math.random() * innerWidth;
var y= Math.random() * innerHeight;
var dx=5;
var dy=5;
function animate(){
    requestAnimationFrame(animate); 
    ctx.clearRect(0,0,innerWidth,innerHeight)

    ctx.beginPath();
    ctx.arc(x,y,50,0,Math.PI *2, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
   
   if(x +50 > innerWidth || x -50 < 0){
       dx= -dx;
   }
   if(y +50 > innerHeight || y -50 < 0){
       dy= -dy;
   }

  
   x+=dx;
   y+=dy;
   
}

animate();*/


/*var x= Math.random() * innerWidth;
var y= Math.random() * innerHeight;
var dx=5;
var dy=5;
var radius= 50;*/

var mouse ={
    x:undefined,
    y:undefined
}
var MaxRadius=50;
var MinRadius=5;

var ColorArray= [
    '#FFFFFF',
    '#FBF37C',
    '#7F7F7F',
    '#58555A',
    '#000000',
];

window.addEventListener('resize',function(){
    c.width = window.innerWidth;
    c.height = window.innerHeight;

})


window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
   /* console.log(mouse);*/
})

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy =dy;
    this.radius = radius;
    this.color= ColorArray[Math.floor(Math.random() * ColorArray.length)];

    this.draw =function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI *2, false);
        ctx.fillStyle = this.color ;
        ctx.fill();

    }
    this.update= function(){
        if(this.x +this.radius > innerWidth || this.x -this.radius< 0){
            this.dx= -this.dx;
        }
        if(this.y +this.radius > innerHeight || this.y -this.radius < 0){
            this.dy= -this.dy;
        }
     
       
        this.x += this.dx;
        this.y += this.dy;


        if(mouse.x- this.x<50 && mouse.x- this.x > -50 && mouse.y- this.y<50 && mouse.y- this.y > -50 ){
            if(this.radius<MaxRadius){
                this.radius +=1;
            }
        }else if(this.radius >MinRadius){
            this.radius -=1;
        }

        this.draw();
    }
}



var circleArray =[];

for(var i=0; i<800; i++){
var x= Math.random() * (innerWidth - radius*2) + radius ;
var y= Math.random() * (innerHeight- radius*2) + radius;
var dx = (Math.random() - 0.5)*2;
var dy = (Math.random() - 0.5)*2;
var radius = Math.random()*4+1;
circleArray.push(new Circle(x,y,dx,dy,radius));

}


function animate(){
    requestAnimationFrame(animate); 
    ctx.clearRect(0,0,innerWidth,innerHeight);

   for(var i=0; i < circleArray.length; i++){
       circleArray[i].update();
   } 
}

animate();











