import { StyleSheet } from 'react-native'
import { Colors, Typography, Spacings, ThemeManager } from 'react-native-ui-lib'

import { colors, fontTypes, sizes } from '@/constants'

/*
IMPORTANT: 
  all property in imported constants above 
  can be used as extended modifiers/style. 
  e.g: <Text green bg-gray lg margin-sm bold>
*/

const styles = StyleSheet.create({
  fontStyle: { fontFamily: fontTypes.regular }
})

const customSpacings = {
  page: sizes.base,
  card: sizes.xs,
}
const customTypographies = {
  heading: { fontSize: sizes.xl, lineHeight: Math.floor(sizes.xl * 1.4) },
  subheading: { fontSize: sizes.lg, lineHeight: Math.floor(sizes.lg * 1.4) },
  section: { fontSize: sizes.md, lineHeight: Math.floor(sizes.md * 1.4) },
  body: { fontSize: sizes.base, lineHeight: Math.floor(sizes.base * 1.4) },
  caption: { fontSize: sizes.sm, lineHeight: Math.floor(sizes.sm * 1.4) },
}
const customColors = {
  primary: colors.green,
  secondary: colors.yellow,
  primaryColor: colors.green,
  secondaryColor: colors.yellow,
  textColor: colors.black,
  errorColor: colors.red,
  successColor: colors.blue,
  warnColor: colors.yellow
}

for (const sizeKey in sizes) {
  customTypographies[sizeKey] = { fontSize: sizes[sizeKey], lineHeight: Math.floor(sizes[sizeKey] * 1.4) }
  customSpacings[sizeKey] = sizes[sizeKey] // <- check preset first 
}

for (const fontTypeKey in fontTypes) {
  customTypographies[fontTypeKey] = { fontFamily: fontTypes[fontTypeKey] }
}

for (const colorKey in colors) {
  customColors[colorKey] = colors[colorKey]
}

Colors.loadColors(customColors)

Typography.loadTypographies(customTypographies)

Spacings.loadSpacings(customSpacings)