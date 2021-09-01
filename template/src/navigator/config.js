import { DefaultTheme } from '@react-navigation/native'
import { colors } from '@/constants'

export const AppTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: colors.background
	}
}