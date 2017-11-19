class Marker {
  constructor (size, color, remainingInk) {
    this.size = size
    this.color = color
    this.remainingInk = remainingInk
  }

  write (text) {
    const charLength = text.split(' ').reduce((acc, word) => acc + word.length, 0)
    if (this.remainingInk >= charLength) {
      this.remainingInk -= charLength
      return text
    } else {
      let remainingChars = -this.remainingInk
      this.remainingInk = 0

      let index = 0
      let partial = ''
      while (remainingChars < 0) {
        let character = text[index]
        if (character !== ' ') remainingChars++

        partial += character
        index++
      }

      return partial
    }
  }
}

module.exports = Marker
