import shapes from './shapes'

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomShape = () => {
  return random(1, shapes.length - 1)
}

// returns the default grid
export const gridDefault = () => {
  const rows = 18
  const cols = 10

  return Array(rows).fill(Array(cols).fill(0))
}

// Return the default state for the game
export const defaultState = () => {
  return {
    // Create an empty grid
    grid: gridDefault(),
    // Get a new random shape
    shape: randomShape(),
    // set rotation of the shape to 0
    rotation: 0,
    // set the 'x' position of the shape to 5 and y to -4, which puts the shape in the center of the grid, above the top
    x: 5,
    y: -4,
    // set the index of the next shape to a new random shape
    nextShape: randomShape(),
    // Tell the game that it's currently running
    isRunning: true,
    // Set the score to 0
    score: 0,
    // Set the default speed
    speed: 1000,
    // Game isn't over yet
    gameOver: false
  }
}
