import { StyleSheet } from 'react-native'

export const styles =StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.screen.base
  },
  image: {
    resizeMode: 'contain'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  centralized: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    justifyContent: 'space-between'
  },
  loginButton: {
    marginVertical: 20
  }
})
