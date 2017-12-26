import {SHOPPING_BAG_TYPES, ShoppingBagItem} from '../../src/domain/ShoppingBagItem'

const aBook = {
  id: '8282',
  isbn: '1234567890',
  isbn13: '1234567890123',
  imageUri: 'https://images-na.ssl-images-amazon.com/images/I/41ctTkMx6PL.jpg',
  title: 'Calculus',
  author: 'Stewart, James',
  edition: '8th edition'
}

const anotherBook = {
  id: '8282',
  isbn: '123123123',
  isbn13: '1231231230123',
  imageUri: 'https://images-na.ssl-images-amazon.com/images/I/41ctTkMx6PL.jpg',
  title: 'Calculus',
  author: 'Eduardo Moroni',
  edition: '9th edition'
}

describe('Shopping Bag Domain Object', () => {
  it('should increase/decrease item quantity', () => {
    const anItem = new ShoppingBagItem(aBook, SHOPPING_BAG_TYPES.BUY)
    expect(anItem.quantity).toEqual(1)

    anItem.increaseQuantity()
    expect(anItem.quantity).toEqual(2)

    anItem.decreaseQuantity()
    expect(anItem.quantity).toEqual(1)
  })

  it('should raise an error if type is invalid', () => {
    expect(() => {
      const book = new ShoppingBagItem(aBook, 'INVALID')
      expect(book).toEqual(undefined)
    }).toThrow('Invalid Shopping bag item type')
  })

  it('should treat same id and type items as same objects', () => {
    const anItem = new ShoppingBagItem(aBook, SHOPPING_BAG_TYPES.BUY)
    const anotherItem = new ShoppingBagItem(anotherBook, SHOPPING_BAG_TYPES.BUY)

    expect(anItem.equals(anotherItem)).toEqual(true)
  })
})
