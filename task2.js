const reversedString = () => {
    let reversedString = '';
    for(let i = string.length -1; i >= 0; i--) {
      reversedString  += string[i]
     }
    return reversedString;
  }
  
  const string = 'Striker';
  console.log(reversedString(string))

  module.exports = reversedString;