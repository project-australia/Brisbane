export class UpdateProfileRequest {
  constructor (user) {
    this.id = user.id
    this.telephone = user.telephone
    this.school = user.school
    this.address = user.address
  }

  id
  name
  telephone
  school
  address
}
