import React from 'react'
import { Image, ImageBackground, View } from 'react-native'

import { styles } from './styles/coverImage.style'

export const CoverImage = props => (
  <ImageBackground
    blurRadius={10}
    resizeMode={'cover'}
    style={styles.background}
    {...props}
  >
    <View style={styles.lightOverlay} />
    <Image resizeMode={'contain'} style={styles.mainImage} {...props} />
  </ImageBackground>
)
