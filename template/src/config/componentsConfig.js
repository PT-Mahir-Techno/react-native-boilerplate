import { StyleSheet } from 'react-native'
import { ThemeManager } from 'react-native-ui-lib'

import { colors, sizes } from '@/constants'

ThemeManager.setComponentTheme('Text', {
  'regular': true,
  'black': true
})