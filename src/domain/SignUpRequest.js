export class SignUpRequest {
  constructor(email, password, user) {
    this.email = email
    this.password = password
    this.referredBy = user.referredBy
    this.name = user.name
    this.email = user.email
    this.telephone = user.telephone
    this.school = user.school
    this.address = user.address
    this.birthDate = user.birthDate
  }

  referredBy
  name
  email
  password
  birthDate
  telephone
  school
  address
}
