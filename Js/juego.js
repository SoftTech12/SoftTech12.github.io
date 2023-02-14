const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const grid = 15;
const paddleHeight = grid * 5; // 80
const maxPaddleY = canvas.height - grid - paddleHeight;

var paddleSpeed = 6;
var ballSpeed = 5;



const leftPaddle = {
  // empezar en el medio el lado izquierdo
  x: grid * 2,
  y: canvas.height / 2 - paddleHeight / 2,
  width: grid,
  height: paddleHeight,

  // Velocidad de las barras
  dy: 0
};
const rightPaddle = {
  // Empezar en el medio el lado derecho
  x: canvas.width - grid * 3,
  y: canvas.height / 2 - paddleHeight / 2,
  width: grid,
  height: paddleHeight,

  // Velocidad de barra
  dy: 0
};
const ball = {
  // El juego empieza en el medio
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: grid,
  height: grid,

  // Saber cuando reiniciar la pelota
  resetting: false,

  // Velocidad Pelota
  dx: ballSpeed,
  dy: -ballSpeed
};

// Detectar la colision entre dos objetos utilizando los ejes

function collides(obj1, obj2) {
  return obj1.x < obj2.x + obj2.width &&
         obj1.x + obj1.width > obj2.x &&
         obj1.y < obj2.y + obj2.height &&
         obj1.y + obj1.height > obj2.y;
}

// JUego en bucle
function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);

  // Velocidad de las barras
  leftPaddle.y += leftPaddle.dy;
  rightPaddle.y += rightPaddle.dy;

  // Las barras no pasan de la paredes
  if (leftPaddle.y < grid) {
    leftPaddle.y = grid;
  }
  else if (leftPaddle.y > maxPaddleY) {
    leftPaddle.y = maxPaddleY;
  }

  if (rightPaddle.y < grid) {
    rightPaddle.y = grid;
  }
  else if (rightPaddle.y > maxPaddleY) {
    rightPaddle.y = maxPaddleY;
  }

  // Barras
  context.fillStyle = 'white';
  context.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
  context.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);

  // Que la pelota se mueva con su velocidad
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Evitar que la pelota atraviese la paredes laterales
  if (ball.y < grid) {
    ball.y = grid;
    ball.dy *= -1;
  }
  else if (ball.y + grid > canvas.height - grid) {
    ball.y = canvas.height - grid * 2;
    ball.dy *= -1;
  }

  // Resetear la pelota si pasa la barra
  if ( (ball.x < 0 || ball.x > canvas.width) && !ball.resetting) {
    ball.resetting = true;

    // Tiempo de espera para comenzar la partida
    setTimeout(() => {
      ball.resetting = false;
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
    }, 400);
  }

  // Cuando la pelota toca la barra cambia la velocidad
  if (collides(ball, leftPaddle)) {
    ball.dx *= -1;

    // Cuando la barra toca la pelota va al lado contrario
    ball.x = leftPaddle.x + leftPaddle.width;
  }
  else if (collides(ball, rightPaddle)) {
    ball.dx *= -1;

    // Cuando la barra toca la pelota va al lado contrario
    ball.x = rightPaddle.x - ball.width;
  }

  // Pelota
  context.fillRect(ball.x, ball.y, ball.width, ball.height);

  // Lineas exteriores
  context.fillStyle = 'lightgrey';
  context.fillRect(0, 0, canvas.width, grid);
  context.fillRect(0, canvas.height - grid, canvas.width, canvas.height);

  // Linea del medio
  for (let i = grid; i < canvas.height - grid; i += grid * 2) {
    context.fillRect(canvas.width / 2 - grid / 2, i, grid, grid);
  }
}

// Detecta las pulsaciones del teclado para que se muevan las barras
document.addEventListener('keydown', function(e) {

  // tecla flecha arriba
  if (e.which === 38) {
    rightPaddle.dy = -paddleSpeed;
  }
  // tecla flecha abajo
  else if (e.which === 40) {
    rightPaddle.dy = paddleSpeed;
  }

  // tecla w
  if (e.which === 87) {
    leftPaddle.dy = -paddleSpeed;
  }
  // tecla s
  else if (e.which === 83) {
    leftPaddle.dy = paddleSpeed;
  }
});

// Detecta si se suelta la tecla para que se pare la barraaw
document.addEventListener('keyup', function(e) {
  if (e.which === 38 || e.which === 40) {
    rightPaddle.dy = 0;
  }

  if (e.which === 83 || e.which === 87) {
    leftPaddle.dy = 0;
  }
});

// Empieza el juego
requestAnimationFrame(loop);

