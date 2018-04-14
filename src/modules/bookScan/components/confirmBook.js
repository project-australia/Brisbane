import React, { Component } from 'react'
import { Alert, Text, ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { book } from '../../home/propTypes/bookDetail'

import { AppStatusBar } from '../../shared/components/appStatusBar'
import { BookTitleAndAuthor } from '../../shared/components/bookTitleAndAuthor'
import { CoverImage } from '../../shared/components/coverImage'
import { GeneralInfoCard } from '../../shared/components/generalInfoCard'
import { MenuTitle } from '../../shared/components/menuTitle'
import { ModalConditionExplanation } from '../../shared/components/modals/modalConditionExplanation'
import { ModalOptionSelect } from '../../shared/components/modals/modalOptionSelect'
import { ModalRentalTerms } from '../../shared/components/modals/modalRentalTerms'
import { Navbar } from '../../shared/components/navbar'
import { PriceRow } from '../../shared/components/priceRow'
import { RowValue } from '../../shared/components/rowValue'
import { Touchable } from '../../shared/components/touchable'
import { PriceRowNotMember } from '../../shared/components/priceRowNotMember'
import { InviteToRep } from '../../shared/components/inviteToRep'
import { SimpleButton } from '../../shared/components/buttons'

import { Fonts, Colors, Metrics } from '../../../constants'
import { styles } from './styles/bookScanner.style'

export class BookDetails extends Component {
  static propTypes = {
    book: book,
    screenType: PropTypes.oneOf(['SELL', 'BUY', 'RENT']).isRequired,
    isUndesiredBook: PropTypes.bool.isRequired,
    onPressSell: PropTypes.func.isRequired,
    onPressRent: PropTypes.func.isRequired,
    onPressBuy: PropTypes.func.isRequired
  }

  state = {
    book: this.props.book,
    isConditionExplanationModalOn: false,
    isConditionModalOn: false,
    isRentalTermsModalOn: false,
    navRightIcons: [
      {
        name: 'cart-outline',
        onPress: this.props.navigateToShoppingBag
      }
    ]
  }
  renderAbout = about => {
    if (about && about !== '') {
      return (
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionGray}>{about}</Text>
        </View>
      )
    }
    return null
  }

  showConditionModal = () => this.setState({ isConditionModalOn: true })
  hideConditionModal = () => this.setState({ isConditionModalOn: false })
  showRentalTermsModal = () => this.setState({ isRentalTermsModalOn: true })
  hideRentalTermsModal = () => this.setState({ isRentalTermsModalOn: false })
  showConditionExplanationModal = () =>
    this.setState({ isConditionExplanationModalOn: true })
  hideConditionExplanationModal = () =>
    this.setState({ isConditionExplanationModalOn: false })
  updateSelectedCondition = selectedCondition =>
    this.setState({
      isConditionModalOn: false,
      book: { ...this.props.book, condition: selectedCondition }
    })

  confirmRent = () =>
    Alert.alert(
      'Rental agreement',
      'By confirming you agree to our Rental Terms of Agreement, do you confirm?',
      [
        { text: 'Check terms', onPress: this.showRentalTermsModal },
        { text: 'Decline', onPress: () => {}, style: 'cancel' },
        { text: 'Agree', onPress: this.props.onPressRent }
      ],
      { cancelable: true }
    )

  agreedWithTerms = () => {
    this.hideRentalTermsModal()
    this.props.onPressRent()
  }

  renderMembershipData = () => {
    const { membershipStatus, onPressBallardsClub, screenType } = this.props
    const isSelling = screenType === 'SELL'
    const sellOrBuy = isSelling ? 'more money selling' : 'off buying'
    switch (membershipStatus) {
      case 'NONE':
        return (
          <Touchable
            onPress={onPressBallardsClub}
            style={{ flexDirection: 'row' }}
          >
            <Text style={[styles.footnote, { flex: 1 }]}>
              Club More 20% {sellOrBuy} books.
            </Text>
            <SimpleButton
              title={'Learn more'}
              onPress={onPressBallardsClub}
              style={{
                marginRight: Metrics.section,
                marginVertical: Metrics.baseMargin
              }}
            />
          </Touchable>
        )
      case 'TWENTY':
        return (
          <Touchable onPress={onPressBallardsClub}>
            <Text style={styles.footnote}>
              Be a Rep {sellOrBuy} books.
              <Text style={styles.textAccent}> LEARN MORE</Text>
            </Text>
          </Touchable>
        )
      default:
        return null
    }
  }

  conditionsModalOptions = [
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

  onPressSell = book => {
    if (book.condition) {
      this.props.onPressSell(book)
    } else {
      alert('Please, fill book condition field')
    }
  }

  conditionRow = () => {
    const { screenType } = this.props
    const { condition } = this.state.book
    const isSelling = screenType === 'SELL'
    const [onPressCondition, onPressConditionTitle] = isSelling
      ? [this.showConditionModal, this.showConditionExplanationModal]
      : [this.showConditionExplanationModal, undefined]
    const defaultCondition = 'Select a condition'

    return (
      <RowValue
        title={'Condition'}
        subtitle={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name={'help-circle'}
              size={Metrics.icons.tiny}
              color={Colors.primary500}
              style={{ marginRight: Metrics.smallMargin }}
            />
            <Text style={{ ...Fonts.style.caption, color: Colors.primary500 }}>
              About conditions
            </Text>
          </View>
        }
        value={
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1
            }}
          >
            <Text
              style={{
                flex: 1,
                ...Fonts.style.description,
                color: Colors.gray900,
                textAlign: 'right'
              }}
            >
              {condition || defaultCondition}
            </Text>
            <Icon
              name={'menu-down'}
              size={Metrics.icons.small}
              color={Colors.gray700}
              style={{
                marginRight: Metrics.doubleBaseMargin,
                marginLeft: Metrics.baseMargin
              }}
            />
          </View>
        }
        onPress={onPressCondition}
        onPressTitle={onPressConditionTitle}
      />
    )
  }

  render() {
    const { onPressBuy, screenType, isUndesiredBook } = this.props
    const {
      book,
      isConditionExplanationModalOn,
      isConditionModalOn,
      isRentalTermsModalOn,
      navRightIcons
    } = this.state
    const { about, authors, images, isbn, prices, title } = book
    const isSelling = screenType === 'SELL'
    const isBuying = screenType === 'BUY'
    const screenTitle = isSelling
      ? 'Sell your book'
      : isBuying ? 'Buy a book' : 'Rent a Book'

    return (
      <View style={styles.container}>
        <AppStatusBar />
        <Navbar
          title={screenTitle}
          rightIcons={navRightIcons}
          onBack={this.props.navigateBack}
        />
        <ScrollView>
          <CoverImage source={{ uri: images.large }} />
          <BookTitleAndAuthor title={title} authors={authors} />
          {isUndesiredBook || this.conditionRow()}
          <PriceRow
            isUndesiredBook={isUndesiredBook}
            screenType={screenType}
            price={prices}
            onRent={() => this.confirmRent(book)}
            onBuy={() => onPressBuy(book)}
            onSell={() => this.onPressSell(book)}
          />
          {isSelling &&
            (!this.props.membershipStatus ||
              this.props.membershipStatus === 'NONE') && (
              <PriceRowNotMember
                prices={prices}
                onPressBallardsClub={this.props.onPressBallardsClub}
              />
            )}
          {isSelling &&
            (this.props.membershipStatus &&
              this.props.membershipStatus === 'TWENTY') && (
              <InviteToRep
                onPressBallardsClub={this.props.onPressBallardsClub}
              />
            )}
          <MenuTitle title={'Details'} style={styles.titleWrap} />
          <GeneralInfoCard style={styles.standardSpacing}>
            {this.renderAbout(about)}
            <Text style={styles.description}>ISBN</Text>
            <Text style={styles.descriptionGray}>{isbn}</Text>
          </GeneralInfoCard>
        </ScrollView>
        <ModalOptionSelect
          title={'Select the condition'}
          isVisible={isConditionModalOn}
          onCancel={this.hideConditionModal}
          options={this.conditionsModalOptions}
        />
        <ModalConditionExplanation
          isVisible={isConditionExplanationModalOn}
          onCancel={this.hideConditionExplanationModal}
        />
        <ModalRentalTerms
          isVisible={isRentalTermsModalOn}
          onCancel={this.hideRentalTermsModal}
          buttonTitle={'Agree with the terms'}
          onPressButton={this.agreedWithTerms}
        />
      </View>
    )
  }
}
