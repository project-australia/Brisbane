import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'

import { Navbar } from '../../shared/components/navbar'
import { OrderSummaryList } from './orderSummaryList'
import { MenuTitle } from '../../shared/components/menuTitle'
import { FormOutlineButton } from '../../shared/components/buttons'

import { styles } from './styles/shoppingBagItems.style'

export const BuyBooksProcess = (props) => {
  const booksLength = props.booksToSell.length
  return (
    <View>
      <Navbar
        title={`Buying ${booksLength} Books`}
        onBack={props.navigateBack}
      />
      <ScrollView>
        <OrderSummaryList
          orders={props.booksToSell}
          total={props.totalPrice}
        />

        <MenuTitle title={'Shipping'} style={styles.titleWrap} />
        <View style={styles.wrappingCard}>
          <Text style={styles.footnote}>
            Books will be shipped to the following address:
          </Text>
          <Text style={styles.description}>
            12870 Interurban Avenue South, Seattle, WA 98168
          </Text>
        </View>

        <MenuTitle title={'Address Options'} style={styles.titleWrap} />
        <View style={styles.wrappingCard}>
          <Text style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}>
            Use another address to receive the books
          </Text>
          <View style={styles.rowWrap}>
            <FormOutlineButton
              secondary
              title={'Switch Address'}
              style={styles.inlineButton}
              onPress={() => alert('Tracking number saved')}
            />
          </View>
        </View>

        {/* <MenuTitle title={'Tracking number'} style={styles.titleWrap} />
        <View style={styles.wrappingCard}>
          <Text style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}>
            Type the tracking number below, so we can track the shipping
          </Text>
          <View style={styles.rowWrap}>
            <FormTextInput
              style={{ flex: 1 }}
              placeholder={'Insert tracking number'}
            />
            <FormOutlineButton
              secondary
              title={'Send'}
              style={styles.inlineButton}
              onPress={() => alert('Tracking number saved')}
            />
          </View>
        </View> */}

        <MenuTitle title={'Checkout'} style={styles.titleWrap} />
        <View style={styles.wrappingCard}>
          <Text style={StyleSheet.flatten([styles.footnote, styles.itemsWrap])}>
            Choose a method to finalize your selling
          </Text>
          <FormOutlineButton
            secondary
            title={'Pay localy'}
            // style={styles.inlineButton}
            onPress={() => alert('Go to add payment method on profile')}
          />
          <View style={{ height: 15 }} />
          <FormOutlineButton
            secondary
            title={'Checkout with Paypal'}
            // style={styles.inlineButton}
            onPress={() => alert('Go to add payment method on profile')}
          />
        </View>
      </ScrollView>
    </View>
  )
}
