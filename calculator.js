//Add function
const add = (a, b) => {
    return a + b
  }
  //Subtract function
  const subtract = (a,b) => {
    return a - b
  }
  //Multiply function
  const multiply = (a,b) => {
    return a * b
  }
  //divide function
  const divide = (a, b) => {
    return a / b
  }
  
  console.log(add())
  console.log(subtract())
  console.log(multiply())
  console.log(divide())

  module.exports = {
    add,
    subtract,
    multiply,
    divide,
  };