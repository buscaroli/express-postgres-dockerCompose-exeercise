const db = require('../dbConfig')

class Employer {
  constructor(employerId, companyName, industry) {
    this.employerId = employerId
    this.companyName = companyName
    this.industry = industry
  }

  static get getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const allEmployers = db.query(`SELECT * FROM employers;`)
        const employersObjArray = allEmployers.map(
          (employer) => new Employer(employer)
        )
        resolve(employersObjArray)
      } catch (err) {
        reject('Error fetching Employers')
      }
    })
  }
}
