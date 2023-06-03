const canvas=document.querySelector('#game');
const game = canvas.getContext('2d');

let elementSize ;
let canvasSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize)

function setCanvasSize(){
    ;
    if (window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.80;
    } else {
        canvasSize = window.innerHeight * 0.80;
    }
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementSize = (canvasSize /10) -1;
    starGame();
}

function starGame(){

    game.font = elementSize +'px Verdana';
    game.textAlign = '';

    for (let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            game.fillText(emojis['X'],elementSize*i,elementSize*j);
        }
        

    }
    //window.innerWidth
    //game.fillRect(0,0,100,100);
    //game.clearRect(50,50,50,50)
    //game.clearRect(0,0,50,100)
    //game.clearRect(0,0,50,50)
    //game.font = '15px Verdana';
    //game.fillStyle = 'purple';
    //game.textAlign = 'center';
    //game.fillText ('Hola mundo',55, 25)


}