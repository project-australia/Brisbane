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

export class ConfirmBook extends Component {
  static propTypes = {
    book: book,
    screenType: PropTypes.oneOf(['SELL', 'BUY']).isRequired
  }

  state = {
    navRightIcons: [
      {
        name: 'cart-outline',
        onPress: this.props.navigateToShoppingBag
      }
    ]
  }

  render () {
    const { book, onPressSell, onPressDonate, onPressBallardsClub } = this.props
    const { aboutBook, author, isbn, images, sellPrice, title } = book
    return (
      <View style={styles.container}>
        <Navbar
          title={'Sell your book'}
          rightIcons={this.state.navRightIcons}
          onBack={this.props.navigateBack}
        />
        <ScrollView>
          <CoverImage source={{ uri: images.large }} />
          <BookTitleAndAuthor title={title} author={author} />
          <MenuTitle title={'Selling Options'} style={styles.titleWrap} />
          <PriceRow
            title={{
              sell: 'I want to sell my book',
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
