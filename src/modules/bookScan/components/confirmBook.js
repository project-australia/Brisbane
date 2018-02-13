import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import { book } from '../../home/propTypes/book'

import { Navbar } from '../../shared/components/navbar'
import { CoverImage } from '../../shared/components/coverImage'
import { BookTitleAndAuthor } from '../../shared/components/bookTitleAndAuthor'
import { MenuTitle } from '../../shared/components/menuTitle'
import { PriceRow } from '../../shared/components/priceRow'
import { Touchable } from '../../shared/components/touchable'
import { GeneralInfoCard } from '../../shared/components/generalInfoCard'

import { styles } from './styles/bookScanner.style'

export class BookDetails extends Component {
  static propTypes = {
    book: book,
    screenType: PropTypes.oneOf(['SELL', 'BUY', 'RENT']).isRequired,
    onPressDonate: PropTypes.func,
    onPressSell: PropTypes.func,
    onPressBuy: PropTypes.func
  }

  state = {
    navRightIcons: [
      {
        name: 'cart-outline',
        onPress: this.props.navigateToShoppingBag
      }
    ]
  }

  buyPriceRow() {
    const { book, onPressBuy, screenType } = this.props
    const { buyingPrice } = book

    return (
      <PriceRow
        book={book}
        screenType={screenType}
        title={{
          buy: 'I want to buy this book'
        }}
        price={buyingPrice}
        button={{
          title: {
            buy: 'buy'
          },
          onPress: {
            buy: book => onPressBuy(book)
          }
        }}
      />
    )
  }

  sellPriceRow() {
    const { book, onPressSell, onPressDonate } = this.props
    const { sellPrice } = book

    return (
      <PriceRow
        title={{
          sell: 'I want to sellBook my book',
          donate: 'I want to donate my book'
        }}
        price={sellPrice}
        button={{
          title: {
            sell: 'Sell',
            donate: 'Donate'
          },
          onPress: {
            sell: onPressSell,
            donate: onPressDonate
          }
        }}
      />
    )
  }

  render() {
    const isSelling = this.props.screenType === 'SELL'
    const { book, onPressBallardsClub } = this.props
    const { aboutBook, author, isbn, images, title } = book

    return (
      <View style={styles.container}>
        <Navbar
          title={isSelling ? 'Sell your book' : 'Buy a book'}
          rightIcons={this.state.navRightIcons}
          onBack={this.props.navigateBack}
        />
        <ScrollView>
          <CoverImage source={{ uri: images.large }} />
          <BookTitleAndAuthor title={title} author={author} />
          {isSelling && (
            <MenuTitle title={'Selling Options'} style={styles.titleWrap} />
          )}
          {isSelling ? this.sellPriceRow() : this.buyPriceRow()}
          <Touchable onPress={onPressBallardsClub}>
            <Text style={styles.footnote}>
              Ballards club members gets 10% more money selling books.
              <Text style={styles.textAccent}> LEARN MORE</Text>
            </Text>
          </Touchable>
          <MenuTitle title={'Details'} style={styles.titleWrap} />
          <GeneralInfoCard style={styles.standardSpacing}>
            {aboutBook !== null && (
              <Text style={[styles.description, styles.bottomSpacing]}>
                {aboutBook}
              </Text>
            )}
            <Text style={styles.description}>ISBN</Text>
            <Text style={styles.descriptionGray}>{isbn}</Text>
          </GeneralInfoCard>
        </ScrollView>
      </View>
    )
  }
}
