import { StyleSheet } from 'react-native'
import { Colors, Typography, Spacings, ThemeManager } from 'react-native-ui-lib'

import { colors, fontTypes, sizes } from '@/constants'

/*
IMPORTANT: 
  all property in imported constants above 
  can be used as extended modifiers/style 
*/

const styles = StyleSheet.create({
  fontStyle: { fontFamily: fontTypes.regular }
})

const customSpacings = {}
const customTypographies = {}
const customColors = {
  primary: colors.green,
  secondary: colors.yellow,
}

for (const sizeKey in sizes) {
  customTypographies[sizeKey] = { fontSize: sizes[sizeKey], lineHeight: Math.floor(sizes[sizeKey] * 1.4) }
  // customSpacings[sizeKey] = sizes[sizeKey] // <- check preset first 
}

for (const fontTypeKey in fontTypes) {
  customTypographies[fontTypeKey] = { fontFamily: fontTypes[fontTypeKey] }
}

for (const colorKey in colors) {
  customColors[colorKey] = colors[colorKey]
}

Colors.loadColors(customColors)

Typography.loadTypographies(customTypographies)

ThemeManager.setComponentTheme('Text', {
  'regular': true,
  'black': true
})