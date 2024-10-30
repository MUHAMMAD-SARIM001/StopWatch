const display = document.getElementById ("display")
let timer =null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
   if(!isRunning){
       startTime = Date.now() -elapsedTime;
       timer = setInterval (update,10)
       isRunning =true
   }
   console.log(startTime)
}
function stop(){
   if (isRunning) {
       clearInterval(timer);
       isRunning = false;
   }

}
function reset(){
   clearInterval(timer);
   isRunning = false;
   elapsedTime = 0;
   display.textContent = "0:0:0:0"; 
}
function update() {
 const currentTime = Date.now();
 elapsedTime = currentTime - startTime;

 const hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, '0');
 const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60).toString().padStart(2, '0');
 const seconds = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2, '0');
 const milliseconds = (elapsedTime % 1000).toFixed(1).toString().padStart(4, '0');

 display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
