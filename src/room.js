class Room {
    constructor(name, description){
        this.name = name,
        this.description = description,
        this.contents = []
    }
    add(item){
        return this.contents.push(item) && this 
    }
    has(item){
       return this.contents.includes(item)  
    }
}


module.exports = Room