import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import { book } from '../../home/propTypes/book'

import { BookTitleAndAuthor } from '../../shared/components/bookTitleAndAuthor'
import { CoverImage } from '../../shared/components/coverImage'
import { GeneralInfoCard } from '../../shared/components/generalInfoCard'
import { MenuTitle } from '../../shared/components/menuTitle'
import { ModalOptionSelect } from '../../shared/components/modals/modalOptionSelect'
import { Navbar } from '../../shared/components/navbar'
import { PriceRow } from '../../shared/components/priceRow'
import { RowValue } from '../../shared/components/rowValue'
import { Touchable } from '../../shared/components/touchable'

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
    isConditionModalOn: false,
    navRightIcons: [
      {
        name: 'cart-outline',
        onPress: this.props.navigateToShoppingBag
      }
    ],
    selectedCondition: 'Used – Acceptable',
    book: this.props.book
  }

  showConditionModal = () => this.setState({ isConditionModalOn: true })
  hideConditionModal = () => this.setState({ isConditionModalOn: false })
  updateSelectedCondition = selectedCondition => (
    this.setState({
      selectedCondition,
      isConditionModalOn: false,
      book: { ...this.props.book, condition: selectedCondition }
    })
  )

  render () {
    const {
      onPressBallardsClub,
      onPressBuy,
      onPressDonate,
      onPressSell,
      screenType
    } = this.props
    const {
      aboutBook,
      authors,
      condition,
      images,
      isbn,
      price,
      title
    } = this.state.book
    const isSelling = screenType === 'SELL'
    const [onPressCondition, onPressConditionTitle] = (isSelling)
      ? [this.showConditionModal, () => console.log('show about conditions modal')]
      : [() => console.log('show about conditions modal'), undefined]

    const conditionsModalOptions = [
      {
        title: 'Used – Acceptable',
        onPress: () => this.updateSelectedCondition('Used – Acceptable')
      },
      {
        title: 'Used – Good',
        onPress: () => this.updateSelectedCondition('Used – Good')
      },
      {
        title: 'Used – Very Good',
        onPress: () => this.updateSelectedCondition('Used – Very Good')
      },
      {
        title: 'Used – Like New',
        onPress: () => this.updateSelectedCondition('Used – Like New')
      },
      {
        title: 'New',
        onPress: () => this.updateSelectedCondition('New')
      }
    ]

    return (
      <View style={styles.container}>
        <Navbar
          title={isSelling ? 'Sell your book' : 'Buy a book'}
          rightIcons={this.state.navRightIcons}
          onBack={this.props.navigateBack}
        />
        <ScrollView>
          <CoverImage source={{ uri: images.large }} />
          <BookTitleAndAuthor title={title} authors={authors} />
          <RowValue
            title={'Condition'}
            subtitle={'About conditions'}
            value={condition}
            onPress={onPressCondition}
            onPressTitle={onPressConditionTitle}
          />
          <PriceRow
            book={this.state.book}
            screenType={screenType}
            title={{
              buy: 'Buy this book for',
              donate: 'Donate this book',
              rent: 'Rent this book for',
              sell: 'Sell this book for'
            }}
            price={price}
            button={{
              title: {
                buy: 'buy',
                donate: 'Donate',
                sell: 'Sell'
              },
              onPress: {
                buy: book => onPressBuy(book),
                donate: book => onPressDonate(book),
                sell: book => onPressSell(book)
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
        <ModalOptionSelect
          title={'Select the condition'}
          isModalVisible={this.state.isConditionModalOn}
          onClose={this.hideConditionModal}
          options={conditionsModalOptions}
        />
      </View>
    )
  }
}
