class Student {
  constructor (name, skillLevel) {
    this.name = name
    this.skillLevel = skillLevel
    this.assignments = []
  }

  study () {
    if (this.skillLevel < 100) this.skillLevel += 1
    return this
  }

  doHomework (assignment) {
    if (!assignment) {
      this.assignments.forEach(assignment => this.doHomework(assignment))
      return
    }

    const skillLevel = assignment.skillLevel
    if (!skillLevel || skillLevel <= 0 || skillLevel > 100) return

    assignment.completed = this.skillLevel > skillLevel
    this.assignments.push(assignment)
  }
}

module.exports = Student
