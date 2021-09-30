class Marker {
  constructor(size, color, remainingInk){
      this.size = size,
      this.color = color,
      this.remainingInk = remainingInk
  }
  write(input){
    const characterCount = input.split('').filter(char=>char!==' ').length 
    this.remainingInk -= characterCount
    if(characterCount > this.remainingInk){
      return input.slice(0, this.remainingInk)
    }
    return input
  }
}
module.exports = Marker


