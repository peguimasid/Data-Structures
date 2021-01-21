class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `${this.firstName}'s full name is ${this.firstName} ${this.lastName}`
  }

  markLate() {
    this.tardies++
    if(this.tardies >= 3) {
      return `YOU ARE EXPELLED!!!!`
    }
    return `Student ${this.firstName} has been late ${this.tardies} times`
  }

  addScore(score) {
    this.scores.push(score)
    return this.scores
  }

  calculateAvarage() {
    return this.scores.reduce((a, b) => a + b) / this.scores.length
  }
}

const me = new Student('Guilhermo', 'Masid')

me.addScore(4)
me.addScore(5) 
me.addScore(66) 

console.log(me.scores) // [ 4, 5, 66 ]
console.log(me.calculateAvarage()) // 25