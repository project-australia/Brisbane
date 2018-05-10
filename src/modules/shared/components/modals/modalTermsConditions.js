import React from 'react'
import { Modal, Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { Navbar } from '../navbar'
import { SolidButton } from '../buttons'
import { styles } from './styles/modalRentalTerms.style'

export const ModalTermsConditions = ({
  isVisible,
  onCancel,
  buttonTitle,
  onPressButton
}) => (
  <Modal visible={isVisible} onRequestClose={onCancel} animationType={'slide'}>
    <Navbar title={'Terms and Conditions'} onBack={onCancel} ignoreAndroidStatusBar />
    <ScrollView>
      <Text style={styles.title}>Terms & Conditions</Text>
      <Text style={styles.text}>
      The ISBN of the item you wish to sell must match exactly with what is displayed on the Ballard Books app/website. Just matching the title is not enough. Some books have the same title with different editions but a different ISBN. Also, there are books with multiple volumes (Vol-I, Vol-II etc.). Items that don't meet the product description or eligibility criteria are considered not acceptable and are subject to the conditions below. Rejected items will be subject to the Rejected Items terms and conditions below
      </Text>
      <Text style={styles.text}>
        • The items you submit must meet the General Conditions Guidelines, as determined by us in our sole discretion, or such items will be rejected.
      </Text>
      <Text style={styles.text}>
        • Prior to choosing a condition for your item, you must review the condition description presented to you during the item submission process, inspect your item thoroughly and ensure that it meets the condition criteria you specify. We will inspect your item against the same condition criteria.
      </Text>
      <Text style={styles.text}>
        • We cannot confirm the quoted value of an item until we receive your item. Despite our best efforts, a small number of the items in our catalog may display an inaccurate quoted value. If the correct quoted value of an item is lower than the stated value, we may, at our discretion, either contact you for instructions on whether you wish to submit the item at the correct quoted value or cancel your order and notify you of such cancellation. If your item is cancelled due to an incorrect value, we will return the item to you at no additional cost. You will not receive any payment for the returned item.
      </Text>

      <Text style={styles.title}>Rejected Items</Text>
      <Text style={styles.text}>
        • Items are inspected upon receipt using the General Conditions Guidelines, as determined by us in our sole discretion. Items failing to meet the General Conditions Guidelines, will be rejected. You will not receive any payment for Rejected Items.
      </Text>
      <Text style={styles.text}>
        • Rejected items are considered donation or those you’d like returned will be shipped to you within 14 days after receipt at your cost through USPS Media Mail. You will be contacted regarding the rejected items.
      </Text>
      <Text style={styles.text}>
        • We may, in our sole discretion, accept Incorrect items for an adjusted quote instead of disposing of or returning the Incorrect item to you.
      </Text>
      <Text style={styles.text}>
        • If the item was Downgraded to a lower condition that is still eligible for us to buy, and you opted to receive the new quoted value, then you will receive the amount quoted for the lower condition instead of receiving the item back from us.
      </Text>

      <Text style={styles.title}>Rejected Book Conditions</Text>
      <Text style={styles.text}>
        We purchase books in good condition or better. Books we are NOT accepting have the following:
      </Text>
      <Text style={styles.text}>
        • Broken spine or binding
      </Text>
      <Text style={styles.text}>
      • Taped cover
      </Text>
      <Text style={styles.text}>
        • Missing, torn, or loose pages
      </Text>
      <Text style={styles.text}>
      • Excessive writing, marking, or highlighting
      </Text>
      <Text style={styles.text}>
      • Excessive stains or water damage (wavy, discolored, stains, rings)
      </Text>
      <Text style={styles.text}>
      • Strong odor of any kind
      </Text>
      <Text style={styles.text}>
        • Mold
      </Text>
      <Text style={styles.text}>
        • Burns, fire, or smoke damage
      </Text>
      <Text style={styles.text}>
        • Any other significant damage
      </Text>
      <Text style={styles.text}>
        • International Editions
      </Text>
      <Text style={styles.text}>
      • Teachers or Instructors Editions
      </Text>
      <Text style={styles.text}>
        • Custom editions
      </Text>
      <Text style={styles.text}>
        • ebooks
      </Text>
      <Text style={styles.text}>
        • Marked “Not for Resale”
      </Text>
      <Text style={styles.text}>
        • Library copy
      </Text>
      <Text style={styles.text}>
        • Workbooks with answers filled in
      </Text>

      <Text style={styles.title}>General Condition Guidelines</Text>
      <Text style={styles.text}>
        New:  Just like it sounds. A brand-new, unused, unread copy in perfect condition. The dust cover and original protective plastic wrapping are intact. All supplementary materials are included and all access codes for electronic material, if applicable, are valid and/or in working condition.
      </Text>
      <Text style={styles.text}>
        Used - Like New:  Dust cover, if any, is intact, with no nicks or tears. Spine has no signs of creasing. Pages are clean and not marred by notes or folds of any kind.
      </Text>
      <Text style={styles.text}>
        Used - Very Good: Pages are intact. May have some limited notes or highlighting and some limited signs of wear. The spine is undamaged.
      </Text>
      <Text style={styles.text}>
        Used - Good: All pages and cover are intact. Spine may show signs of wear. Pages may include notes and highlighting.
      </Text>
      <Text style={styles.text}>
        Used - Acceptable:  The item is fairly worn. Signs of wear can include light water stain and/or aesthetic issues such as scratches, dents, minor rips, and worn corners. Pages may include notes and highlighting or show other signs of previous use.
      </Text>

      <Text style={styles.title}>About Shipping</Text>
      <Text style={styles.text}>
        Sending Books to Ballard Books:
      </Text>
      <Text style={styles.text}>
      • You will receive a prepaid shipping label via email. Within 3 calendar days of submitting your item(s) on the app/website or within 3 calendar days from the last day of the semester for rentals, you must print your prepaid shipping label and ship your item(s) via the post office (or given to your mailman).
      </Text>
      <Text style={styles.text}>
      • Please note that the shipping label has been paid for through USPS Media Mail. If you decide to use a Priority Mail container, please note that you would get charged by the post office and this prepaid label will be voided due to it being for Media Mail.
      </Text>
      <Text style={styles.text}>
        • Please note that sometimes packages do get tossed around during shipping so please package carefully with that in mind and make sure that the item doesn't shift around inside the package.
      </Text>
      <Text style={styles.text}>
      • Items not received within 10 days of submission are automatically cancelled or subject to a requote.
      </Text>
      <Text style={styles.text}>
      • Items post marked after the 3rd calendar day from the last day of the semester for rentals are subject to a late fee or the difference of the purchase price minus the rental fee already paid.
      </Text>
      <Text style={styles.text}>
        • When shipping multiple orders, don’t include items from other orders in the same package. Each shipping label is uniquely assigned to a specific order.
      </Text>

      <Text style={styles.title}>Receiving Books from Ballard Books:</Text>
      <Text style={styles.text}>
        • All orders are shipped within the same or next business day of your order.
      </Text>
      <Text style={styles.text}>
        • Most of our shipping options include tracking numbers.
      </Text>
      <Text style={styles.text}>
        • All orders are subject to verification prior to shipping.
      </Text>
      <Text style={styles.text}>
        • Shipping times are only estimates and vary by location.
      </Text>
      <Text style={styles.text}>
        • Shipping rates are calculated based on weight and location.
      </Text>
      <Text style={styles.text}>
        • Ballard Books doesn't guarantee delivery of packages due to inclement weather. We do not offer shipping refunds for resulting delays.
      </Text>

      <Text style={styles.title}>
        Local Pick up and Deliveries:
      </Text>
      <Text style={styles.text}>
        We do free local pick up and delivery near Provo/Orem area. Once we receive notification of the request to pick up or deliver, we will contact the user promptly via phone or email to set up the meeting.
      </Text>

      <Text style={styles.title}>
        How to get paid
      </Text>
      <Text style={styles.text}>
        Once we receive and inspect the book(s) to make sure they're not damaged, you'll see the amount on the front of the app under My Wallet. You can then withdraw it and it will go to your PayPal or Venmo account. This may take around 72 hours to process.
      </Text>

      <Text style={styles.title}>
        Rentals
      </Text>
      <Text style={styles.text}>
        Our rental periods are for one semester. If you need your book for an extra semester, you can re-rent the book or purchase the book by paying the purchase price minus the rental price already paid.
      </Text>

      <Text style={styles.title}>
        Returns
      </Text>
      <Text style={styles.text}>
        You are welcome to return your textbook for a full refund within 30 days from the date of delivery or within the first two weeks of the current semester for rentals.
      </Text>
      <Text style={styles.text}>
      • Book must be in the same condition in which we shipped it to you. We're not responsible for any damage incurred during transit.
      </Text>
      <Text style={styles.text}>
        • For new books, access codes and CDs/DVDs must be unused/unopened.
      </Text>
      <Text style={styles.text}>
      • Textbooks sold in new condition that are returned in used condition (or sealed textbooks returned opened) will be valued at their current "used" price.
      </Text>
      <Text style={styles.text}>
      • Textbooks rented in new condition that are sealed must be unopened to receive a full refund.
      </Text>
      <Text style={styles.text}>
      • All components (workbooks, study guides, CDs/DVDs, etc.) must be returned.
      </Text>
      <Text style={styles.text}>
      • Shipping charges are nonrefundable.
      </Text>
      <Text style={styles.text}>
        • We will credit you once your book arrives and is inspected (typically takes 2-4 business days).
      </Text>
      <Text style={styles.text}>
      • Please allow up to 2 weeks to receive your refund.
      </Text>
      <Text style={styles.text}>
        • Refund will be issued to the original form of payment.
      </Text>
      <Text style={styles.text}>
        • Items post marked after the 3rd calendar day from the last day of the semester for rentals are subject to a late fee or the difference of the purchase price minus the rental fee already paid.
      </Text>

      <Text style={styles.title}>
        Late returns
      </Text>
      <Text style={styles.text}>
      • Purchased items must be returned within 30 days of the delivery date. Items received after 30 days will be subject to a 20% restocking fee.
      </Text>
      <Text style={styles.text}>
      • Rental items must be returned within the first two weeks of the current semester to receive full refund. No portion of the rental fee will be refunded after that date.
      </Text>

      <Text style={styles.title}>
        Returning damaged items
      </Text>
      <Text style={styles.text}>
        • Purchased items that are damaged, missing parts, not in the original condition, or have obvious signs of use for reasons not due to Ballard Books error may be subject to a restocking fee of up to 50% of the item's price.
      </Text>
      <Text style={styles.text}>
        • In the rare event that you should receive a damaged item, please contact us immediately so we can take corrective action. We cannot be held responsible for damaged items after 30 days from the date on your receipt.
      </Text>

      <Text style={styles.title}>
        Elite Club
      </Text>
      <Text style={styles.text}>
        Members receive 20% extra cash for books sold through the app/website. Membership fee is $26.97 per year which renews annually.
        Membership can be cancelled within 3 days of signing up for a full refund. Must be unused to cancel.
      </Text>
    </ScrollView>
    {onPressButton && (
      <SolidButton title={buttonTitle} onPress={onPressButton} />
    )}
  </Modal>
)

ModalTermsConditions.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
}
