const db = require('../dbConfig')

class Employer {
  constructor(employerId, companyName, industry) {
    this.employerId = employerId
    this.companyName = companyName
    this.industry = industry
  }
}
