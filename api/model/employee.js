const db = require('../dbConfig')
class Employee {
  constructor(employeeId, fullname, age, employerId) {
    this.employeeId = employeeId
    this.fullname = fullname
    this.age = age
    this.employerId = employerId
  }
}
