import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import {
	Home,
} from '@/screens'

import { AppTheme } from './config'
import { navigationRef } from './RootNavigation'

const { Navigator, Screen } = createStackNavigator()

export default function AppNavigator () {
	return <>
		<NavigationContainer ref={navigationRef} theme={AppTheme}>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name="Home" component={Home} />
			</Navigator>
		</NavigationContainer>
	</>
}