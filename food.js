import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

const getRandomFoodPosition = () => {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5;


export const update = () => {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export const draw = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}