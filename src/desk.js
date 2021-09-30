class Desk {
    constructor(length, width, height, isWhiteboard){
        this.length = length,
        this.width = width,
        this.height = height, 
        this.isWhiteboard = isWhiteboard,
        this.content = ''
      }

  write(str){
    this.content += str;
  }

  wipe(){
    if(this.isWhiteboard === true){
      return this.content = ''
    } else {
      if(this.isWhiteboard === false){
        return this.content
      }
    }
  }
  
  }
  
  module.exports = Desk
