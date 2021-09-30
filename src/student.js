class Student {
    constructor(name, skillLevel){
        this.name = name,
        this.skillLevel = skillLevel,
        this.assignments = []
    }
study(){
    if(this.skillLevel < 100){
        return this.skillLevel++ && this;
    }
}

doHomework(homework) {
    if(!homework){
        this.assignments.forEach(assignment => {
            if(this.skillLevel > assignment.skillLevel) 
             assignment.completed = true
            else assignment.completed = false;
        })
    } else {

    
    if(this.skillLevel > homework.skillLevel) homework.completed = true
    else homework.completed = false

    if(homework.skillLevel && homework.skillLevel<=100) this.assignments.push(homework)
  }
 }
}




module.exports = Student
