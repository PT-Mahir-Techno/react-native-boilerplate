import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-ui-lib'

import { sizes } from '@/constants'
import { getScreenSize } from '@/helpers'

const NoData = ({ illustration: Illustration, title, description, children }) =>
	<View style={styles.container}>
		<Illustration height={getScreenSize().width / 2.5} />
		<Text center bold gray style={styles.title}>
			{title}
		</Text>
		<Text center sm gray>
			{description}
		</Text>
	</View>

export default NoData

const styles = StyleSheet.create({
	container: { alignItems: 'center', marginVertical: sizes.xxl, width: '80%', alignSelf: 'center' },
	title: { marginTop: sizes.xl, marginBottom: sizes.base / 2 },
})