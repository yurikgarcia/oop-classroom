class Computer {
  constructor (name, operatingSystem, processor, memory, graphics) {
    this.on = false
    this.name = name
    this.operatingSystem = operatingSystem
    this.processor = processor
    this.memory = memory
    this.graphics = graphics
  }

  power () {
    this.on = !this.on
  }
}

module.exports = Computer
