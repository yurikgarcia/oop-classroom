class Computer {
    constructor(name, operatingSystem, processor, memory, graphics){
        this.name = name,
        this.operatingSystem = operatingSystem,
        this.processor = processor,
        this.memory = memory,
        this.graphics = graphics,
        this.on = false 
    }
    power(){
        if(this.on === false){
            return this.on = true
        } else {
            if(this.on = true){
                return this.on = false
            }
            }
        }
    }

module.exports = Computer
