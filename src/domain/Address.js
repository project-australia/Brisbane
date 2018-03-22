export class Address {
  constructor(street, city, number, zipCode, state) {
    this.street = street
    this.city = city
    this.number = number // FIXME: Remove number from representation
    this.zipCode = zipCode
    this.state = state
  }

  street
  city
  number
  zipCode
  state
}
