import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntesection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById('game-board');

const main = (currentTime) => {
  if(gameOver) {
    const result = confirm('Would you like to play again?');
    if(result) {
      window.location = '/';
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

const update = () => {
  updateSnake();
  updateFood();
  checkForDeath();
}

const draw = () => {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

const checkForDeath = () => {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntesection();
}