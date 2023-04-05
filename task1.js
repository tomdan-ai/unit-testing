function stringLength(string) {
    if(string.length < 10){
      return string.length;
    }else {
      throw Error("Cannot exceed ten characters!");
    }
  }
  const string = 'Testing'
  console.log(stringLength(string))

  module.exports = stringLength;