var canvas = document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");
var mousePos = {x: 0, y: 0};

class Test {
    constructor(x, y, dx, dy, size){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.score = 0;
    
    }
    
    whenClicked(){
        var x = mousePos.x;
        var y = mousePos.y;
        console.log("x: "+ String(x)+", y: "+ String(y));

        if(x >= this.x && x < this.x + this.size && y >= this.y && y<this.y + this.size){
            this.x = Math.random()*(canvas.width-this.size);
            this.y = Math.random()*(canvas.height-this.size);
            this.score += 1;
        } 
    }
    
     draw(){
         ctx.fillStyle = "green";
         //this.x = (this.x + this.dx)%canvas.width;
         //this.y = (this.y + this.dy)%canvas.height;
         ctx.fillRect(this.x, this.y, this.size, this.size);
         document.getElementById("score").innerHTML = "Score: " + String(this.score);
     }   
}

function draw(){
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 myTest.draw();
 requestAnimationFrame(draw);
 
 
  
  
}
function initalize(){
    function setPos(evt) {
        mousePos.x = ((typeof evt.clientX != 'undefined') ? evt.clientX : mousePos.x);
        mousePos.y = ((typeof evt.clientY != 'undefined') ? evt.clientY : mousePos.y);
    }
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
    myTest = new Test(canvas.width/2, canvas.height/2, 3, 2, 200);
    window.addEventListener('mousemove', setPos);
   window.addEventListener("click", function(){myTest.whenClicked()});
    
}
initalize();
draw();
