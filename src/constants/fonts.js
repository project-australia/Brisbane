const type = {
  base: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 42,
  h2: 36,
  h3: 32,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 15,
  regular: 17,
  medium: 14,
  small: 13,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  input: {
    fontFamily: type.base,
    fontSize: size.input
  },
  footnote: {
    fontFamily: type.base,
    fontSize: size.small
  }
}

export const Fonts = {
  type,
  size,
  style
}
