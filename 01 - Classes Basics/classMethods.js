class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  static EnrollStudents() {
    return 'Enrolling'
  }
}

const me = new Student('Guilhermo', 'Masid')

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

console.log(Point.distance(p1, p2))