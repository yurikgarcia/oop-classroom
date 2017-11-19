class Desk {
  constructor (length, width, height, isWhiteboard) {
    this.content = ''
    this.length = length
    this.width = width
    this.height = height
    this.isWhiteboard = isWhiteboard
  }

  write (text) {
    this.content += text
  }

  wipe () {
    if (this.isWhiteboard) this.content = ''
  }
}

module.exports = Desk
