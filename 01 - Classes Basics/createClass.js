class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const me = new Student('Guilhermo', 'Masid')

console.log(me) // Student { firstName: 'Guilhermo', lastName: 'Masid' }